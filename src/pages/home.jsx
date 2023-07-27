import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import News from './News';
import Add from './add';
import Edit from './edit';
import SinglePage from './SinglePage';

const Home = () => {
    return ( 
        <React.Fragment>
            <div className="home">
                <div className="navbar">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"add"}>News Add</NavLink>
                </div>
                <Routes>
                    <Route index element={<News />}/>
                    <Route path='add' element={<Add />}/>
                    <Route path='edit/:id' element={<Edit />}/>
                    <Route path='news/:id' element={<SinglePage />}/>
                </Routes>
            </div>
        </React.Fragment>
     );
}
 
export default Home;