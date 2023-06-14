import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import CheckOut from '../CheckOut/CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import{BsCurrencyDollar} from 'react-icons/bs'
const Payment = () => {
  
    const [paymentData,setPaymentData]=useState({})
 


    const {id}=useParams()

    
    useEffect(() => {
        if (id) {
          fetch(`https://assignment-12-server-steel.vercel.app/selectedClass/${id}`)
            .then(res => res.json())
            .then(data => {
              setPaymentData(data);
            
            })
            .catch(error => {

             
            });
        }
      }, []);
   
 
     

    
const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_API)
    return (
        <div>
             <h2 className='text-center text-[#38b000] font-bold text-4xl'>Payment <span></span> </h2>
            <Elements stripe={stripePromise}>
            <CheckOut paymentData={paymentData} ></CheckOut>
            </Elements>
           
        </div>
    );
};

export default Payment;