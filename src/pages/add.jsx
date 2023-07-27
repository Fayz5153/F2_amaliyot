import React, {useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../contains';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    let navigate = useNavigate()
    const [img, setImg] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleAdd = () =>{
        const data = {
            img: img,
            title: title,
            text: text
        }
        axios.post(BASE_URL, data).then((res)=>{
            console.log(res)
            if (res.status === 201) {
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        })
    }

    return ( 
        <React.Fragment>
            <div className="add">
                
                <input 
                    type="text" placeholder='img url' 
                    onChange={(e)=>setImg(e.target.value)}
                />
                <input 
                    type="text" placeholder='title'
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea  
                    cols="30" rows="10" placeholder='matn'
                    onChange={(e)=>setText(e.target.value)}
                ></textarea>
                <button onClick={handleAdd}>Add</button>
            </div>
        </React.Fragment>
     );
}
 
export default Add;