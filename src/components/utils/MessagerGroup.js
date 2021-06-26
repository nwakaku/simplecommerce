import { Button } from '@material-ui/core';
import girl from '../../image/woman.jpg';

const MessagerGroup = () => {
    return (
        <div style={{
            color:'white',
            backgroundColor:'blue'
        }}>
            <div>
                <div>
                    <ul style={{
                    display:'flex',
                    padding:'1rem',
                    margin: '0 2rem'
                }}>
                        <li>ChatGroups</li>
                        <li><i class="fas fa-plus"></i></li>
                        <li><i class="fas fa-ellipsis-v"></i></li>
                    </ul>
                    <h3></h3>               
                </div>
            </div>
            <div className="user_profile">
                <img src={girl} alt='' />
                <div>
                  <h3>Wisdom Nwakaku</h3> 
                  <span>software Dev</span> 
                </div>
            </div>
        </div>
    )
}

export default MessagerGroup