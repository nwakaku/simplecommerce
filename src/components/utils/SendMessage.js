import React, { useState, useContext } from 'react'
import { db } from '../../firebase'
import { UserContext } from '../../UserContext';
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const { state, messagerGroup } = useContext(UserContext);
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL, displayName } = state.kite
        if(messagerGroup){
        await db.collection(`${messagerGroup.name}`).add({
            text: msg,
            photoURL,
            uid,
            chater: displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
        }

    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <div style={{backgroundColor:"white", display:"flex", marginBottom: '-3rem',borderRadius:'2rem'}}>
                        <button className='sim_btn'><i className="fas fa-microphone"></i></button>
                        <Input style={{ flexBasis: '100%', fontSize: '15px',flexGrow:'8', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                        <button className='sim_btn'><i className="far fa-smile-beam"></i></button>
                        <button className='sim_btn'><i className="fas fa-camera-retro"></i></button>
                        <button className='sim_btn'><i className="fas fa-paperclip"></i></button>
                        <button type='submit' className='send_btn'><i className="fas fa-paper-plane"></i></button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default SendMessage
