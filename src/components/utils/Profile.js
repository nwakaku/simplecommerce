import { Input } from '@material-ui/core'
import React from 'react'
import girl from '../../image/woman.jpg';


const Profile = () => {
    return (
        <div className="chat_profile">
            <div className="profile_pic">
                <img src={girl} alt="" />
                <h3>MaterialHub</h3>
                <p>Sons of Fashion</p>
                <small>"Ecommerce"</small> 
            </div>
            <div className="profile_info">
                <ul>
                    <li><i className="fas fa-mobile-alt"></i> +2347083519662</li>
                    <li><i className="fas fa-sign-in-alt"></i> Register as Member</li>
                    <li><i className="fas fa-envelope-open-text"></i> Nwakakucc@gmail.com</li>
                    <li><i className="fas fa-user-cog"></i> Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
