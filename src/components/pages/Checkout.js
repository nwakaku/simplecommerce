import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from '../utils/TextError';
import './checkout.css'


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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

}

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
}) 

  return (
    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
      <Form>
          <div className='container section'>
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
                    <div>
                      <Field 
                        placeholder='Address'
                        type='text' id='address' 
                        name='address'
                        className='field_form' />
                        <br/>
                      <ErrorMessage name='address' component={TextError}/>
                    </div>
                    <div>
                      <Field 
                        placeholder='Closest park'
                        type='option'
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
                        placeholder='Your Password'
                        type='password' 
                        id='password' 
                        name='password'
                        className='field_form'/>
                        <ErrorMessage name='password' component={TextError}/>
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
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
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
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </div>
          </div>
      </Form>
          
    </Formik>
    
   
  );
}