import React, { useState, useContext } from 'react'
import { db } from '../../firebase'
import { UserContext } from '../../UserContext';
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const { state } = useContext(UserContext);
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL, displayName } = state.kite

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            chater: displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <div style={{backgroundColor:"#ccc", display:"flex", marginBottom: '-3rem',borderRadius:'2rem'}}>
                        <Button style={{  fontSize: '15px', fontWeight: '550'}} type="submit"><i class="fas fa-microphone"></i></Button>
                        <Input style={{ flexBasis: '78%', fontSize: '15px',flexGrow:'8', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                        <Button style={{  fontSize: '15px', fontWeight: '550'}} type="submit"><i class="far fa-smile-beam"></i></Button>
                        <Button style={{  fontSize: '15px', fontWeight: '550'}} type="submit"><i class="fas fa-camera-retro"></i></Button>
                        <Button style={{  fontSize: '15px', fontWeight: '550'}} type="submit"><i class="fas fa-paperclip"></i></Button>
                        <Button style={{ 
                                fontSize: '25px', 
                                fontWeight: '650', 
                                maxWidth: '50px', 
                                color:'#395dff', 
                                padding:'1rem'}} type="submit"><i class="fas fa-paper-plane"></i></Button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default SendMessage
