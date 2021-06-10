import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../../UserContext';
import TextError from './TextError';
import { Link, useHistory } from "react-router-dom"


const Login = () => {
const {signin, users} = useContext(UserContext);
const [error, setError] = useState('');
const [test, setTest] = useState({})
const [loading, setLoading] = useState(false)
const history = useHistory();


const initialValues = {
    email: '',
    password: '',
}

const onSubmit = (values) => {
    
    setError('');
    setLoading(true);
    const email = values.email;
    const password = values.password;
    signin(email, password )
      .then((ref) => {
        setLoading(false);
        history.push("/")
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
      console.log("clicked", values)
  };
      
  


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
}) 
  return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <div className='body'>
                 <div className='form'>
                <Form>
                    <div className='form-logo'>
                        <Link to='/'><h2>materialhub</h2></Link>
                        {error ? <p className='form-error'>{error}</p>: null }
                    </div>

                    
                    <div className='form-group'>
                        <Field 
                            placeholder='Email please'
                            type='text' id='email' name='email' className='form-input'/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>  
                                
                   <div className='form-group'>
                        <Field 
                            placeholder='Your Password'
                            type='password' id='password' name='password' className='form-input'/>
                        <ErrorMessage name='password' component={TextError}/>
                    </div>

                    <div className="form-group">
                    <button className="form-btn" disabled={loading}  type='submit'>Log in</button>
                    </div>


                    <span class="form-delimiter">
                                or connect with
                            </span>
                            <div class="form-social">
                                <a href="#" class="form-social-item fb">
                                <i class="fab fa-facebook-square"></i>
                                </a>
                                <a href="#" class="form-social-item tw">
                                <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="form-social-item gg">
                                <i class="fab fa-google"></i>
                                </a>
                            </div>
                            <span class="form-txt">
                                Don't have an account?
                                <Link to='/login'>login</Link>
                            </span>
                            <span class="form-txt">
                                <a href="#">Forgot password?</a>
                            </span>
                </Form>
            
            </div>
            </div>

           
                
        </Formik>
    )
}

export default Login
