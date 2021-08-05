import React,{useContext} from 'react'
import {RiDashboardFill} from 'react-icons/ri'
import {ImUsers} from 'react-icons/im';
import {RiRecordMailLine} from 'react-icons/ri';
import {AiOutlineFundProjectionScreen, AiFillProfile} from 'react-icons/ai';
import {SiPrometheus} from 'react-icons/si';
import {FiSettings} from 'react-icons/fi';
import {MdPowerSettingsNew,MdAccountBalance } from 'react-icons/md';
import {FcTodoList} from 'react-icons/fc'
import {IoPricetagsSharp} from 'react-icons/io5';
import g from '../../../gowns/g1.jpg';
import { UserContext } from '../../../UserContext';
import { Link, NavLink } from 'react-router-dom'



const Sidebar = () => {
    const {state} =useContext(UserContext)
    return (
        <>
            <input type='checkbox' id='menu-toggle' />
            <div className='sidebar'>
                <div className='brand'>
                    <span><SiPrometheus/></span>
                    <h2>MaterialHub</h2>
                </div>
                <div className='sidemenu'>
                    <div className='side-user'>
                        <img className='side-img' src={g}/>
                        <div className='user'>
                            {state.kite ? <div><small>{state.kite.displayName}</small>
                            <p>Software developer</p></div> : null}
                        </div>
                    </div>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="active" to='/admin'>
                                <span> <RiDashboardFill /> </span>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/finance'>
                                <span> <MdAccountBalance /></span>
                                <span>Finances</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/users'>
                                <span> <ImUsers/> </span>
                                <span>Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/purchases'>
                                <span><RiRecordMailLine/></span>
                                <span>Purchase Records</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/adminproducts'>
                                <span><AiOutlineFundProjectionScreen/></span>
                                <span>Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/addadminproduct'>
                                <span><AiFillProfile/></span>
                                <span>Add Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/settings'>
                                <span><FiSettings/></span>
                                <span>Settings</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/todo'>
                                <span><FcTodoList/></span>
                                <span>Todo's</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/signup'>
                                <span><MdPowerSettingsNew/></span>
                                <span>Authentication</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/pricing'>
                                <span><IoPricetagsSharp/></span>
                                <span>Pricing</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Sidebar
