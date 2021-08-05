import React,{ useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from '../../utils/TextError';
import { Link, useHistory } from "react-router-dom"
import '../../utils/signup.css';
import {db, storage } from '../../../firebase';
import { v4 as uuidv4 } from 'uuid'
import Loader from 'react-loader-spinner';


const AddProduct = () => {
const [error, setError] = useState('');
const [loading, setLoading] = useState(false)
const [message, setMessage] = useState('');


    const initialValues = {
    id: uuidv4(),
    imageTitle: '',
    file: '',
    imagePrice: '',
    categories: '',
    describtion: '',
    likes: '',
    viewed: '',
    amountInStock: '',

}




const onSubmit = (values) => {
    setLoading(true)
    if (!values) return null;
	db.collection('products')
		.add({
			// whatever you want to add other than file
            id: values.id,
            imageTitle: values.imageTitle,
            imagePrice: values.imagePrice,
            categories: values.categories,
            describtion: values.describtion,
            likes: values.likes,
            viewed: values.viewed,
            amountInStock: values.amountInStock,
		})
		.then((doc) => {
			if (values.file) {
                console.log("clicked")
				// upload stuff
				const uploadTask = storage
					.ref(`products/${doc.id}`)
					.putString(values.file, 'data_url');

					// OPTIONAL: here you can remove the file from state

				uploadTask.on(
					'state_change',
					null,
					(error) => setError(error),
					() => {
						// when the upload completes
						storage
							.ref(`products/${doc.id}`)
							.getDownloadURL()
							.then((url) => {
								db.collection('products').doc(doc.id).set(
									{ postImage: url },
									{ merge: true }
								);
							});
					}
				);
			}
		});
        setLoading(false)
        setMessage('successful')
  };
  


const validationSchema = Yup.object({
    imageTitle: Yup.string().required('Required'),
    imagePrice: Yup.string().required('Required'),
    categories: Yup.string().required('Required'),
    describtion: Yup.string().required('Required'),
    amountInStock: Yup.string().required('Required'),
}) 

if (loading){
    return (
        <Loader/>
    )
}else{ 
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ setFieldValue }) => (
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
                            <input 
                                id="file" 
                                name="file" 
                                type="file" 
                                className="form-input"
                                onChange={(e) => {
                                    const reader = new FileReader();
                                    if (e.target.files[0]) {
                                        reader.readAsDataURL(e.target.files[0]);
                                    }
                                
                                    reader.onload = (readerEvent) => {
                                        setFieldValue("file", readerEvent.target.result);
                                    };
                                }} />
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
                            <div className='form-group'>
                            <Field 
                                type='text'
                                    placeholder='describtion'
                                    id='describtion' 
                                    name='describtion' 
                                    className="form-input"/>
                                <ErrorMessage name='describtion' component={TextError}/>
                            </div>
                            <div className='form-group'>
                            <Field 
                                type='text'
                                    placeholder='amountInStock'
                                    id='amountInStock' 
                                    name='amountInStock' 
                                    className="form-input"/>
                                <ErrorMessage name='amountInStock' component={TextError}/>
                            </div>


                            <div className="form-group">
                            <button className="form-btn" disabled={loading}  type='submit'>Add to Database</button>
                            </div>

                            <Link to="/admin">
                                Back to Admin
                            </Link>
                    
                        
                    </Form>
                </div>
            </div>
)}
                
            
        </Formik>
    )}

   
}
  


export default AddProduct
