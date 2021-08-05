import React from 'react'
import Main from '../utils/Main'
import Sidebar from '../utils/sidebar';
import '../utils/admin.css';


const MainAdmin = () => {
    return (
        <div>
            <Sidebar/>
            <Main/>
            <label className='close-mobile-menu'
             id='' for='menu-toggle'></label>
        </div>
    )
}

export default MainAdmin
