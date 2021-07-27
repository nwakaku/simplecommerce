import { usePaystackPayment } from 'react-paystack';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import {UserContext} from '../../UserContext';




const PaystackHookExample = ({value}) => {
  const {
   totalPrice} =useContext(UserContext)
  const config = {
    reference: uuidv4(),
    email: value.email,
    amount: totalPrice * 100,
    publicKey: 'pk_test_e376b2bd3fd58a5fef24725e60f82ac03cee8dd5',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  // alert("Thanks for doing business with us! Come back soon!!"),
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  // alert("Wait! You need this oil, don't go!!!!")
}
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button className='comfirm' onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Confirm Purchase</button>
      </div>
    )}

export default PaystackHookExample
