import React from 'react';
import AddProduct from '../utils/AddProduct';
import Sidebar from '../utils/sidebar/Sidebar';
import Topbar from '../utils/topbar/Topbar';
import "./newProduct.css";



const NewProduct = () => {
    return (
        <>
            <Topbar />
            <div className="contener container">
                <Sidebar />
                    <AddProduct />
                </div>
                    
        </>
        
    )
}

export default NewProduct
