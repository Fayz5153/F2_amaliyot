import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../contains';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    let navigate = useNavigate()
    let params = useParams().id
    console.log(params)

    const [img, setImg] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    
    const getData = () => {
        axios.get(BASE_URL+"/"+params).then((res)=>{
            console.log(res.data)
            setImg(res.data.img)
            setTitle(res.data.title)
            setText(res.data.text)
        })
    }
    const handleEdit = () =>{
        const data = {
            img: img,
            title: title,
            text: text
        }
        axios.put(BASE_URL+"/"+params, data).then((res)=>{
            console.log(res)
            if (res.status === 200) {
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return ( 
        <React.Fragment>
            <div className="add">
                <h1>Edit {params}</h1>
                <input 
                    type="text" placeholder='img url' 
                    onChange={(e)=>setImg(e.target.value)}
                    value={img}
                />
                <input 
                    type="text" placeholder='title'
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                />
                <textarea  
                    cols="30" rows="10" placeholder='matn'
                    onChange={(e)=>setText(e.target.value)}
                    value={text}
                ></textarea>
                <button onClick={handleEdit}>Add</button>
            </div>
        </React.Fragment>
     );
}
 
export default Edit;