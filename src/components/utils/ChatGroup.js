import './items.css'
import MessagerGroup from './MessagerGroup';
import React, { useContext, useState } from 'react'
import woman from '../../image/woman.jpg';
import girl from '../../image/chur.jpeg';
import bed from '../../image/Cotton.jpeg';
import { UserContext } from '../../UserContext';

  const groups = {
    file : [
      {
        "id": 1,
        "img": woman,
        "name": "MaterialHubers",
        "logo": 'No blind Peole Club',
        "products": 'Assorted Materials',
        "email": 'nwakaku@gmail.com'
      },
      {
        "id": 2,
        "img": bed,
        "name": "Gucci_Gang",
        "logo": "just Swag",
        "products": 'Foam Covers',
        "email": 'gracejosh454@gmail.com'
      },
      {
        "id": 3,
        "img": girl,
        "name": "Under_Nap",
        "logo": "Pushing soft",
        "products": 'Female Gowns',
        "email": 'nwakaku123@gmail.com'
      }
    ]
  }



const ChatGroup = () => {
    const {chatGroup, 
           setMessagerGroup,
           setChatGroup} =useContext(UserContext);
    const [activeLink, SetActiveLink] = useState(null);
    
    const { file } = groups;
    return (
        <div className={`${chatGroup ?"popup hide__popup" : 'popup'}`}>
            <div className="section product-detail">
                <div className="details container ">
                            {file.map((data) =>{
                            const {id,img,name,logo} = data;
                            return (
                                <div key={id}
                                onClick={() => {SetActiveLink(id);
                                                setMessagerGroup(data);
                                                setChatGroup(!chatGroup)}}
                            className={id === activeLink ? "active_profile" : "user_profile"}>
                                <img src={img} alt='' />
                                <div>
                                <p>{name}</p> 
                                <small>{logo}</small> 
                                </div>
                            </div>
                            )
                            
                            })}
                            
                            <div className="user_profile">
                                <img src={woman} alt='' />
                                <div>
                                <p>Gucci Designs</p> 
                                <small>"Iconic Stars"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>Markcleens</p> 
                                <small>"Fashion Group"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>WinnaTailors</p> 
                                <small>"speed.relation.quality"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>WinnaTailors</p> 
                                <small>"speed.relation.quality"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>WinnaTailors</p> 
                                <small>"speed.relation.quality"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={woman} alt='' />
                                <div>
                                <p>Gucci Designs</p> 
                                <small>"Iconic Stars"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>Markcleens</p> 
                                <small>"Fashion Group"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>WinnaTailors</p> 
                                <small>"speed.relation.quality"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>WinnaTailors</p> 
                                <small>"speed.relation.quality"</small> 
                                </div>
                            </div>
                            <div className="user_profile">
                                <img src={girl} alt='' />
                                <div>
                                <p>WinnaTailors</p> 
                                <small>"speed.relation.quality"</small> 
                                </div>
                            </div>
                    </div>
                
                </div>
            </div>
    )
}

export default ChatGroup
