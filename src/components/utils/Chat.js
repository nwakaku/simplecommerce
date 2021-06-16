import React,{useContext, useEffect, useState, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { UserContext } from '../../UserContext';
import axios from 'axios';


const Chat = () => {
    const { state } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const history = useHistory();


    console.log(state)

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if(!state.kite){
            history.push('/');

            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "70bb9af1-ac44-48e2-b4e0-b3f89d053e25",
                "user-name": state.kite.email,
                "user-secret": state.kite.uid,
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', state.kite.email);
            formdata.append('username', state.kite.email);
            formdata.append('secret', state.kite.uid );

            getFile(state.kite.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name)

                    axios.post(
                        'https://api.chatengine.io/users/',
                        formdata,
                        { headers: { "private-key": "e37771ea-a625-421d-8ed6-aeccacf35ae6"}}
                    )
                      .then(() => setLoading(false))
                      .catch(e => console.log('e', e.response))
                })
        })
    }, [state, history])

    return (
        <div style={{marginTop:'6rem', padding:'2rem'}}>
            <ChatEngine 
                height="calc(100vh - 66px)"
                projectID="70bb9af1-ac44-48e2-b4e0-b3f89d053e25"
                userName={state.kite.email}
                userSecret={state.kite.uid}
            />
        </div>
    )
}

export default Chat
