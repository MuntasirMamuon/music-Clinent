import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import useStudentSelectClass from '../../../Hooks/useStudentSelectClass';

const EnrolledStudent = () => {

    const {user}=useAuth()
    const[enroll,setEnroll]=useState([])

    // const{AvailableSeat,className,image,name,price,email}=enroll
  
    useEffect(()=>{
        fetch('https://assignment-12-server-steel.vercel.app/payments')
        .then(res=>res.json())
        .then(data=>{
            const enrolledCls=data.filter((enrollCls)=>enrollCls?.payment?.student=== user?.email)
            
            setEnroll(enrolledCls)
           
          
        })
    },[])


console.log(enroll);


    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10 mb-10'>Enrolled Class</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name & Image</th>
        <th>Class Name</th>
        <th>Avilable Seat</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
     enroll.map(cl=>(<>
     
     
      
  <tr>
        <th>
        
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cl.payment.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Instructor Name:{cl.payment.name}</div>
              <div className="text-sm opacity-50 font-bold">{cl.email}</div>
            </div>
          </div>
        </td>
        <td className='font-bold'>
         {cl.payment.className}
        
        </td>
        <td className='font-bold'>{cl.payment.AvailableSeat}</td>
        <th>
          ${cl.price}
        </th>
      </tr>
     </>))
    }
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default EnrolledStudent;