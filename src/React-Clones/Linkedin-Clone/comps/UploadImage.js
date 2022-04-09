import React, { useEffect } from "react";
import UploadLinks from "./UploadLinks";
import { BsPencilSquare } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { useState } from "react";
import { useAuth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserTyped } from "../redux/userSlice";
import { db, storage } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const dispatch = useDispatch();
  const { textAreaContent } = useSelector((state) => state.user);
  const currUser = useAuth();
  console.log(currUser);

  const handleImage = (e) => {
    let file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      return;
    }
  };

  const uploadPost = async () => {
    const collectionRef = collection(db, "user");
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytesResumable(storageRef, image);
      const url = await getDownloadURL(storageRef);
      const payload = {
        name: currUser.displayName,
        likes: 0,
        comments: 2,
        photoURL: url,
        timestamp: serverTimestamp(),
        userId: currUser.uid,
        caption: textAreaContent,
      };
      await addDoc(collectionRef, payload);
    }
  };

  return (
    <div className="uploadImage-wrapper">
      <article className="article-section">
        <img src={currUser?.photoURL} alt="iamge" className="image"></img>
        <textarea
          value={textAreaContent}
          className="textarea"
          onChange={(e) => {
            dispatch(setUserTyped(e.target.value));
          }}
        ></textarea>
      </article>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="no iamge"
          className="image-shower"
        ></img>
      )}
      <div className="uploads">
        <UploadLinks name="write article" icon={<BsPencilSquare />} />
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={handleImage}
        />
        <label htmlFor="file">
          <span>
            <BsImages />
          </span>
          image
        </label>
        <button className="upload-btn" onClick={uploadPost}>
          post
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
