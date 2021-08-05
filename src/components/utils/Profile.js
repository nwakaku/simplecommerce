import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';


const Profile = () => {
    const {messagerGroup} = useContext(UserContext);
    if(messagerGroup){
    return (
        <div className="chat_profile">
            <div className="profile_pic">
                <img src={messagerGroup.img} alt="" />
                <h3>{messagerGroup.name}</h3>
                <p>{messagerGroup.products}</p>
                <small>"{messagerGroup.logo}"</small> 
            </div>
            <div className="profile_info">
                <ul>
                    <li><i className="fas fa-mobile-alt"></i> +2347083519662</li>
                    <li><i className="fas fa-sign-in-alt"></i> Register as Member</li>
                    <li><i className="fas fa-envelope-open-text"></i>{messagerGroup.email}</li>
                    <li><i className="fas fa-user-cog"></i> Settings</li>
                </ul>
            </div>
        </div>
    )
    }else{
        return(
        <div>Please join conversation</div>
        )
    }
}

export default Profile
