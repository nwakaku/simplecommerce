import { Button, Input } from '@material-ui/core';
import girl from '../../image/woman.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RestoreIcon from '@material-ui/icons/Restore';
import GroupIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';
import StorageIcon from '@material-ui/icons/Storage';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 250,
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
    const classes = useStyles();
    return (
        <div style={{
            color:'white',
            backgroundColor:'blue',
            height: '89vh'
        }}>
            <div>
                <div className="header">
                        <h3>ChatGroups</h3>
                        <div>
                           <i className="fas fa-plus borderd"></i>
                           <i className="fas fa-ellipsis-v"></i> 
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
            <div className='group_icons'>
                <RestoreIcon />
                <GroupIcon />
                <ContactsIcon />
                <StorageIcon />
            </div>
            <div className="user_profile">
                <img src={girl} alt='' />
                <div>
                  <p>MaterialHub</p> 
                  <small>Sons of fashion</small> 
                </div>
            </div>
            <div className="user_profile">
                <img src={girl} alt='' />
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