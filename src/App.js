import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";

const App = () => {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/layout'}>Layout</Link></li>
                    <li><Link to={'/about'}>About</Link></li>

                </ul>
            </div>
            <div>
                <h2>View</h2>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}/>
                    <Route path={'/about'} element={<About/>}/>



                </Routes>

            </div>
        </div>
    );
};

export default App;