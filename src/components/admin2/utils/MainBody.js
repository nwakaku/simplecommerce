import React,{ PureComponent } from 'react'
import g from '../../../gowns/g1.jpg';
import {HiUserGroup} from 'react-icons/hi';
import {FcLike} from 'react-icons/fc';
import {FaCommentDots} from 'react-icons/fa';
import Polar from './Polar';
import CrazyChart from './CrazyChart';

const MainBody = () => {
    return (
        <>
                <main>
                    <div className='cardas'>
                        <div className='carda'>
                            <div className='carda-icon follow'>
                                <span><HiUserGroup/></span>
                            </div>
                            <div className='carda-info'>
                                <h2>3,281</h2>
                                <small>Total Members</small>
                            </div>
                            <div className='carda-images'>
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                            </div>
                        </div>

                        <div className='carda'>
                            <div className='carda-icon likes'>
                                <span><FcLike/></span>
                            </div>
                            <div className='carda-info'>
                                <h2>19,855</h2>
                                <small>Total likes</small>
                            </div>
                            <div className='carda-images'>
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                            </div>
                        </div>

                        <div className='carda'>
                            <div className='carda-icon comment'>
                                <span><FaCommentDots/></span>
                            </div>
                            <div className='carda-info'>
                                <h2>661</h2>
                                <small>Total comments</small>
                            </div>
                            <div className='carda-images'>
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                                <img src={g} />
                            </div>
                        </div>
                    </div>

                    <div className='chart-grid'>
                        <div className='chart-follow'>
                            <div className='chart-head'>
                                <h3>Members</h3>
                                <span><HiUserGroup/></span>
                            </div>       
                            <div>                   
                            <CrazyChart/>
                            </div>
                        </div>
                        
                        <div className='chart-sales'>
                            <div className='chart-head'>
                                <h3>Sales</h3>
                                <span><FcLike/></span>
                            </div>
                            <div>
                            <Polar/>
                            </div>
                        </div>
                    </div>
                </main>

        </>
        
    )
}

export default MainBody
