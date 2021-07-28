import React,{useContext} from 'react'
import { UserContext } from '../../UserContext';
// import SweetNav from '../utils/SweetNav';
import Chat from '../utils/Chat';
import './chat.css'
import Profile from '../utils/Profile';
import MessagerGroup from '../utils/MessagerGroup';
import LastNav from '../utils/LastNav';

const ChatCommunity = () => {
    const { state } = useContext(UserContext);

    if(state.kite){
        return (
        <div>
            {/* <SweetNav/> */}
            <LastNav/>
            <div className=" mystyle ">
                <MessagerGroup />
                <Chat />
                <Profile/>
            </div>
        </div>
    )
    }else{
        return (
            <div>
            {/* <SweetNav/> */}
            <LastNav/>
            <div className=" mystyle container section">
                welcome most esteemed customer to enjoy more signup
            </div>
        </div>
        )
    }

    
}

export default ChatCommunity
