import React, { useState, useContext, useEffect} from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../../UserContext';



const Popup = () => {
    const [pop, setPop] = useState(false);
    const {state} =useContext(UserContext)

    useEffect(() => {
        {state.kite ? setPop(true) : setPop(false)}
        }
    , [])
    

    return (
        // <!-- PopUp -->
        <div className={`${pop ?"popup hide__popup" : 'popup'}`}>
            <div className="popup__content">
           
            <div className="popup__right">
            <div className="popup__close" onClick={() => setPop(true)}>
                <i className="fas fa-times"></i>
            </div>
            <div className="right__content">
                    <h3 style={{color: '#ff4545'}}>ALMIGHTY GIVEAWAY</h3>
                <h1 style={{fontFamily:'Bangers'}}>ALL SUNDAYS IN AUGUST </h1>
                <h3 style={{color:'#ff4545'}}>#2000OFF</h3>
                <h3 style={{color:'#ff4545'}}>EVERY PURCHASE</h3>
                <Link to='/signup'>CASH_IN</Link>

                </div>
            </div>
            </div>
        </div>

    )
}

export default Popup
