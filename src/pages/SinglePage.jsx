import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../contains';

const SinglePage = () => {
    let params = useParams().id
    console.log(params)

    const [data, setData] = useState([])
    
    const getData = () => {
        axios.get(BASE_URL+"/"+params).then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    
    useEffect(()=>{
        getData()
    },[])
    return ( 
        <React.Fragment>
            <h1>{params}</h1>
            <div className="page">
                <img src={data.img} alt="" />
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </div>
        </React.Fragment>
     );
}
 
export default SinglePage;