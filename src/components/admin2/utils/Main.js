import React from 'react'
import MainBody from './MainBody';
import {FaBars, FaRegHeart, FaRegComments} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {BiHeadphone} from 'react-icons/bi'


const Main = () => {
    return (
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

            <MainBody />
        </div>
    )
}

export default Main
