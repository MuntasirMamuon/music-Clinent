import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useState } from 'react';

const MyClassPayment = () => {

const{user}=useAuth()
const[paymentHistory,setPaymentHistory]=useState([])

    useEffect(()=>{
        fetch('https://assignment-12-server-steel.vercel.app/payments')
        .then(res=>res.json())
        .then(data=>{
            const enrolledCls=data.filter((enrollCls)=>enrollCls?.payment?.student=== user?.email)
            
            setPaymentHistory(enrolledCls);
           
          
        })
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-4xl mt-16 mb-10'>Payment History</h1>


            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>

        <th>Instructor Email</th> 
        <th>Class Name</th> 
        <th>Price</th> 
        <th>transactionId</th> 
        <th>date</th> 
        <th>status</th>
      </tr>
    </thead> 
    <tbody>

        {
         paymentHistory.map(hs=>(<>
         
         <tr>
        
        <td>{hs.email}</td> 
        <td>{hs.payment?.className}</td> 
        <td>${hs.price}</td> 
        <td>{hs.transactionId}</td> 
        <td>{hs.date}</td> 
        <td>{hs.status}</td>
      </tr>
      
         
         
         </>))
        }
      
    </tbody> 
   
  </table>
</div>

        </div>
    );
};

export default MyClassPayment;