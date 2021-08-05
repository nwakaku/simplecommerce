import React from 'react'
import Sidebar from '../utils/sidebar';
import {FaBars, FaRegHeart, FaRegComments} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {BiHeadphone} from 'react-icons/bi'
import TableOne from '../utils/TableOne';
import TableTwo from '../utils/TableTwo';

const AdminUser = () => {
    return (
        <div>
            <Sidebar/>
            <div className='main-content'>
            <div className='header'>
                <label for='menu-toggle' className='menu-toggler'>
                    <span style={{
                            height: '45px',
                            width: '45px',
                            background: 'var(--main)',
                            color: '#fff',
                            display: 'grid',
                            placeItems: 'center',
                            borderRadius: '5px'
                    }}><FaBars/></span>
                </label>
                <div className='search'>
                    <span><ImSearch/></span>
                    <input type='search' placeholder='Enter Keyword' />
                </div>
                <div className='head-icons'>
                    <span><BiHeadphone/></span>
                    <span><FaRegHeart/></span>
                    <span><FaRegComments/></span>
                </div>
            </div>
            <main>
            {/* <TableOne/> */}
            <TableTwo/>
            </main>

            </div>
        </div>
    )
}

export default AdminUser
