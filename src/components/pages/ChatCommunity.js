import React,{useContext} from 'react'
import { UserContext } from '../../UserContext';
import SweetNav from '../utils/SweetNav';
import Navbar from '../utils/Navbar';

const ChatCommunity = () => {
    const { state } = useContext(UserContext);

    if(state.kite){
        return (
        <div>
            <SweetNav/>
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
