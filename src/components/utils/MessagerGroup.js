import React, { useContext, useState } from 'react'
import { Button, Input } from '@material-ui/core';
import woman from '../../image/woman.jpg';
import girl from '../../image/girl.jpg';
import bed from '../../image/bed.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RestoreIcon from '@material-ui/icons/Restore';
import GroupIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';
import StorageIcon from '@material-ui/icons/Storage';
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

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 200,
      margin: '10px 7px',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  }));


const MessagerGroup = () => {
  const [activeLink, SetActiveLink] = useState(null);
  const {setMessagerGroup} = useContext(UserContext);
  
  const { file } = groups;
    const classes = useStyles();
    return (
        <div className='messager_group'>
            <div>
                <div className="header">
                        <h3>DesignerGroups</h3>
                        <div>
                           <i className="fas fa-plus borderd"></i>
                        </div>
                </div>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Material Hub groups"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            {/* <div className='group_icons'>
                <RestoreIcon />
                <GroupIcon />
                <ContactsIcon />
                <StorageIcon />
            </div> */}
            {file.map((data) =>{
              const {id,img,name,logo} = data;
              return (
                <div key={id}
                onClick={() => {SetActiveLink(id);setMessagerGroup(data)}}
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
        </div>
    )
}

export default MessagerGroup