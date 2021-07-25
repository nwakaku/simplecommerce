import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {Button, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from '../utils/TextError';
import './checkout.css'
import Footer from '../utils/Footer';
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    picked: '',
    state: '',
    city: '',
    address: '',
    paymentStyle: '',
    nameCard: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    checked: []
}

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    picked: Yup.string().required('Required'),
    paymentStyle: Yup.string().required('Required'),

}) 

  return (
      <>
  <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {

          setTimeout(() => {
 
            alert(JSON.stringify(values, null, 2));
 
            setSubmitting(false);
 
          }, 400);
 
        }}
        >
          {({ values}) => (
      <Form>
          <div className=' checkout container section'>
            <div className={classes.root}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Contact Info</Typography>
                  <Typography className={classes.secondaryHeading}>Who's our Customer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='contact_form'>
                    <div>
                      <Field 
                        placeholder='Enter your firstname here'
                        type='text' id='firstName' 
                        name='firstName'
                        className='field_form' />
                        <br/>
                      <ErrorMessage name='firstName' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='Enter your lastName here'
                        type='text'
                        id='lastName' 
                        name='lastName'
                        className='field_form' />
                        <br/>
                      <ErrorMessage name='lastName' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='Email please'
                        type='text'
                        id='email' 
                        name='email'
                        className='field_form' />
                        <br/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='Reachable Phone No'
                        type='phone' 
                        id='phone' 
                        name='phone'
                        className='field_form'/>
                        <ErrorMessage name='password' component={TextError}/>
                    </div>
                  </div>
                      
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>Delivery Info</Typography>
                  <Typography className={classes.secondaryHeading}>
                    Where are we delivering To
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className='contact_form'>
                    <div className='field_form'>
                      <label>
                      <Field 
                        type='radio'
                        name='picked'
                        value='Pickup at nearest park'
                       />Normal Delivery<br/>
                      <span style={{color:'green'}}>Free</span>
                      </label>
                        <br/>
                      <ErrorMessage name='picked' component={TextError}/>
                    </div>
                    <div className='field_form'>
                      <label>
                      <Field 
                        type='radio'
                        name='picked'
                        value='Gets delivered at my place of choice
                        note a service fee of $1000 is required;
                        remember to put your phone number'
                      />Special Delivery<br/>
                      <span style={{color:'red'}}>$1000</span>
                      </label>
                        <br/>
                      <ErrorMessage name='picked' component={TextError}/>
                    </div>
                    <div>I choose: {values.picked}</div>
                    <div
                      >
                      <Field 
                        as='select'
                        id='state' 
                        name='state'
                        className='field_form'>
                          <option value='abia'>Abia state</option>
                          <option value='imo'>Imo state</option>
                          <option value='enugu'>Enugu state</option>
                          <option value='anambra'>Anambra state</option>
                      </Field>
                        <br/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        as='select'
                        id='city' 
                        name='city'
                        className='field_form'>
                          <option value='aba'>Aba</option>
                          <option value='owerri'>Owerri</option>
                          <option value='enugu'>Enugu</option>
                          <option value='awka'>Awka</option>
                          <option value='umuahia'>Umuahia</option>
                          <option value='eket'>Eket</option>
                          <option value='uyo'>Uyo</option>
                      </Field>
                        <br/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='Address Describtion'
                        type='text' 
                        id='address' 
                        name='address'
                        className='field_form'/>
                        <ErrorMessage name='address' component={TextError}/>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>Payment Plan</Typography>
                  <Typography className={classes.secondaryHeading}>
                    Choose payment gateway
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className='contact_form'>
                    <div className='field_form'>
                      <label>
                      <Field 
                        type='radio'
                        name='paymentStyle'
                        id='paymentStyle'
                        value='Transfer to Zenithbank:2219867315;nwakaku Izuchukwu wisdom'
                       />Bank Transfer<br/>
                       <small style={{color:'green'}}>...
                       {values.paymentStyle === 'Transfer to Zenithbank:2219867315;nwakaku Izuchukwu wisdom' ? values.paymentStyle : null}</small>
                      </label>
                        <br/>
                      <ErrorMessage name='picked' component={TextError}/>
                    </div>
                    <div className='field_form'>
                      <label>
                      <Field 
                        type='radio'
                        name='paymentStyle'
                        id='paymentStyle'
                        value='Credit Card'
                      />Credit Card<br/>
                       <small style={{color:'green'}}>
                       {values.paymentStyle === 'Credit Card' ? values.paymentStyle : null}</small>
                      </label>
                        <br/>
                      <ErrorMessage name='picked' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='Name on Card'
                        type='text' id='nameCard' 
                        name='nameCard'
                        className='field_form' />
                        <br/>
                      <ErrorMessage name='nameCard' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='Card Number'
                        type='text'
                        id='cardNumber' 
                        name='cardNumber'
                        className='field_form' />
                        <br/>
                      <ErrorMessage name='cardNumber' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='DD//MM//YY'
                        type='text' id='expiration' 
                        name='expiration'
                        className='field_form' />
                        <br/>
                      <ErrorMessage name='expiration' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='CVV'
                        type='text'
                        id='cvv' 
                        name='cvv'
                        className='field_form' />
                        <br/>
                      <ErrorMessage name='cvv' component={TextError}/>
                    </div>
                    </div>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>Terms And Conditions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={classes.secondaryHeading} style={{display:'flex',flexWrap:'wrap'}}>
                  <label>
                  <Field type="checkbox" name="checked" value="Terms and Conditions" />
                  Terms And Conditions 
                </label><br/>
                <button className="form-btn"  type='submit'>Register</button>
                    <div className="continue__shopping">
                                <Link to='/'>
                            Continue Shopping                              
                                </Link>
                            </div>
                  </div>

                </AccordionDetails>
              </Accordion>
              </div>
          </div>
      </Form>
      )}
          
    </Formik>
    <Footer/>
        </>
    
    
   
  );
}