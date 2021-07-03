import React, { useState, useEffect, useRef, useContext } from 'react'
import { db } from '../../firebase'
import { UserContext } from '../../UserContext';
import SendMessage from './SendMessage';
import girl from '../../image/woman.jpg';


function Chat() {
    const { state, messagerGroup } = useContext(UserContext);
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        if(messagerGroup){
        db.collection(`${messagerGroup.name}`).orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })            
        }else{
            setMessages(null)
        }

    }, [messagerGroup])
    return (
        
            <div style={{overflowY:"scroll"}}>
                <div className="msgs">
                    {messages ? messages.map(({ id, text, photoURL, uid, chater }) => (
                        <div>
                            <div key={id} className={`msg ${uid === state.kite.uid ? 'sent' : 'received'}`}>
                                <div>
                                    <img src={girl} alt="" /><br/>
                                    <small style={{fontSize:'10px',fontStyle:'italic'}}>{chater}</small>
                                </div>
                               <p>{text}</p>
                            </div>
                        </div>
                    )): null}
                </div>
                <SendMessage scroll={scroll} />
                <div ref={scroll}></div>
            </div>

        
    )
}

export default Chat
