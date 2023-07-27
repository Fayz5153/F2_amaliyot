import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from '../contains';
import { Link, useNavigate } from 'react-router-dom';

const News = () => {
    let navigate = useNavigate()
    const [data, setData] = useState([])

    const getData = () => {
        axios.get(BASE_URL).then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    const handleDelete = (id) =>{
        console.log(BASE_URL+"/"+id)
        axios.delete(BASE_URL+"/"+id).then((res)=>{
            console.log(res)
            if (res.status === 200) {
                setTimeout(() => {
                    getData()
                }, 500);
            }
        })
    }

    useEffect(()=>{
        getData()
    },[])
    
    return ( 
        <React.Fragment>
            <div className="grid">
                {data.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.img} alt="" />
                            <h3>{item.title}</h3>
                            <Link to={"/news/"+item.id}>{item.text}</Link>
                            <div>
                                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                                <button onClick={()=>navigate("/edit/"+item.id)}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
     );
}
 
export default News;