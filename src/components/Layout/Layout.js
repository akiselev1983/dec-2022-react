import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h3>Sub page menu</h3>
            <ul>
                <li><Link to={'todos'}>Todos page</Link></li>
                <li><Link to={'albums'}>Albums page</Link></li>
                <li><Link to={'comments'}>Comments page</Link></li>
            </ul>
            <div>
                <h3>Sub view</h3>
                <Outlet/>

            </div>
        </div>
    );
};

export default Layout;