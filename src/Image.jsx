import { useState } from "react";
function Image(){
    const [image, setImage]=useState(null);
function handleImageChange(e){
    const file=e.target.files[0];
    if (file){
        setImage(URL.createObjectURL(file));
    }
}
    return(
        <div>
            <h5>* Now Upload any image</h5>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image &&(
                <div style={{marginTop:"10px"}}>
                    <img src={image} alt="Uploaded Preview" style={{borderRadius:"8px" }}/>
                    <p>Your uploaded image!!</p>
            </div>
        )}
        </div>
    )
}
export default Image;