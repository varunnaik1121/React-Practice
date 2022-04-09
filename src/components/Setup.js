function Setup({people}){
   
  


    return <div>
       {
           people.map((person)=>{
              const {id,name,image,age} = person;
              return <>
                <h2>{id}</h2>
                <img src={image} alt=''></img>
                <h2>{age}</h2>
                <h2>{name}</h2>
              </>
           })
       }
    </div>
}
export default Setup;
