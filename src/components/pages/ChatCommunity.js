import React,{useContext} from 'react'
import { UserContext } from '../../UserContext';
import SweetNav from '../utils/SweetNav';
import Navbar from '../utils/Navbar';
import Chat from '../utils/Chat';
import './chat.css'
import Profile from '../utils/Profile';
import MessagerGroup from '../utils/MessagerGroup';

const ChatCommunity = () => {
    const { state } = useContext(UserContext);

    if(state.kite){
        return (
        <div>
            <SweetNav/>
            <div className=" mystyle container section">
                <MessagerGroup />
                <Chat />
                <Profile/>
            </div>
        </div>
    )
    }else{
        return (
            <div>
            Signup to enjoy serve 
        </div>
        )
    }

    
}

export default ChatCommunity
