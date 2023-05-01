import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Post from "./components/Post/Post";

const App = () => {
    return (
        <div>
            <div>
                <h2>MENU</h2>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/layout'}>Layout</Link></li>
                    <li><Link to={'/about'}>About</Link></li>

                </ul>
            </div>
            <div>
                <h2>VIEW</h2>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'todos'} element={<Todos/>}/>
                        <Route path={'albums'} element={<Albums/>}/>
                        <Route path={'comments'} element={<Comments/>}>
                            <Route path={':postId'} element={<Post/>}/>

                            </Route>

                    </Route>
                    <Route path={'/about'} element={<About/>}/>

                </Routes>

            </div>
        </div>
    );
};

export default App;