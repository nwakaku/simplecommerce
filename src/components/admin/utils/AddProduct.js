import React,{ useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from '../../utils/TextError';
import { Link, useHistory } from "react-router-dom"
import '../../utils/signup.css';
import {db } from '../../../firebase';
import { v4 as uuidv4 } from 'uuid'


const AddProduct = () => {
const [error, setError] = useState('');
const [loading, setLoading] = useState(false)
const [message, setMessage] = useState('');


    const initialValues = {
    id: uuidv4(),
    imageTitle: '',
    imageUrl: '',
    imagePrice: '',
    categories: '',
}




const onSubmit = (values) => {
setLoading(true)
 db.collection("products").doc(values.categories)
 .set(values)
 .then(() => {
     setMessage("successful")
 })
 .catch((error)=>{
     setError(error)
 })
 setLoading(false)
      console.log("clicked", values)
  };
      
  


const validationSchema = Yup.object({
    imageTitle: Yup.string().required('Required'),
    imageUrl: Yup.string().required('Required'),
    imagePrice: Yup.string().required('Required'),
    categories: Yup.string().required('Required'),
}) 

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <div className='body'>
                <div className="form">
                    {message ? message : null}
                    {error ? error : null}
                    <Form>
                       <div className="form-group">
                            <Field
                                type='text'
                                placeholder='imageName' 
                                id='imageTitle'
                                name='imageTitle'
                                className="form-input"/>
                                <ErrorMessage name='imageTitle' component={TextError}/>
                        </div>                        
                        <div className='form-group'>
                            <Field 
                                type='imageUrl'
                                placeholder='imageUrl'
                                id='imageUrl'
                                name='imageUrl' 
                                className="form-input"/>
                                <ErrorMessage name='imageUrl' component={TextError}/>
                        </div>                                          
                        <div className='form-group'>
                            <Field 
                                type='imagePrice'
                                placeholder='imagePrice'
                                placeholder='imagePrice' 
                                id='imagePrice' 
                                name='imagePrice' 
                                className="form-input"/>
                                <ErrorMessage name='imagePrice' component={TextError}/>
                        </div>
                        <div className='form-group'>
                            <Field 
                                type='text'
                                    placeholder='categories'
                                    id='categories' 
                                    name='categories' 
                                    className="form-input"/>
                                <ErrorMessage name='categories' component={TextError}/>
                            </div>


                            <div className="form-group">
                            <button className="form-btn" disabled={loading}  type='submit'>Add to Database</button>
                            </div>
                    
                        
                    </Form>
                </div>
            </div>
            
                
            
        </Formik>
    )
}
  


export default AddProduct
