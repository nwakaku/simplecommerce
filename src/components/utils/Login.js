import React,{ useContext,useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../../UserContext';
import TextError from './TextError';
import { Link, useHistory } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {db} from '../../firebase';



const Login = () => {
const {signin, state} = useContext(UserContext);
const [error, setError] = useState('');
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
          db.collection('userProfile')
          .doc(email)
          .get()
          .then((data) => {
              if(data.data().admin === true){
                setLoading(false);
                history.push("/admin") 
              }else{
                setLoading(false);
                history.push("/")
                console.log(data)
              }
          }).catch(err => {
              setError(err.message)
          })
       
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
      
  


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
}) 

    if(loading){
        return (
            <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
        )  
    }
    else{
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
                                <Link to='/signup'>Register</Link>
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
        
}

export default Login
