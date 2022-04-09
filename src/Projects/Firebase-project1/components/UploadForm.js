import React, { cloneElement, useEffect } from "react";
import { storage } from "../Firebase/config";
import db from "../Firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState("");
  const [progress, setProgress] = React.useState(null);
  const [docs,setDocs] = React.useState([])
 

  const types = ["image/png", "image/jpeg"];

  React.useEffect(() => {
    handleUpload(file);
  }, [file]);

  React.useEffect(() => {
     onSnapshot(collection(db, "images"), (snapshot) => {
     
    console.log(snapshot.docs.map((doc)=>doc.data()))
     
    });
   
  }, []);


  const handleUpload = (file) => {
    const storageRef = ref(storage, `files/${file?.name}`);
    const uploadImage = uploadBytesResumable(storageRef, file);
    const collectionRef = collection(db, "images");

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const percentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(percentage);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await getDownloadURL(uploadImage.snapshot.ref);
        const payload = { url };

        setProgress(null);
       if(url){
        await addDoc(collectionRef, payload);
       }
      }
    );
  };

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected?.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("invalid image type selected");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange}></input>
      <div className="output">
        {error ? <div>{error}</div> : <div>{file?.name}</div>}
      </div>
      {progress >= 0 && <h3>{progress}</h3>}
    </div>
  );
};

export default UploadForm;
