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
            <div className=" section" style={{
                display:'grid',
                gridTemplateColumns:'1fr 3fr 1fr',
                height:'100vh'
            }}>
                <MessagerGroup />
                <Chat />
                <Profile/>
            </div>
        </div>
    )
    }else{
        return (
            <div>
                loading
            </div>
        )
    }

    
}

export default ChatCommunity
