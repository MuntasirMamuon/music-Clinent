import React, { useEffect, useState } from 'react';
import useMyClass from '../../../Hooks/useMyClass';
import useAuth from '../../../Hooks/useAuth';
import {FcFeedback} from "react-icons/fc";

const MyClass = () => {

const {user}=useAuth()
const[classes,setClasses]=useState([])
const [feedbackData, setFeedbackData] = useState(null);
    useEffect(()=>{
     fetch(`https://assignment-12-server-steel.vercel.app/addClass?email=${user?.email}`)
     .then(res=>res.json())
     .then(data=>{
        setClasses(data)
     })
    },[])



    return (
        <div>
          <h1 className='text-center font-bold mt-10 mb-10 text-3xl'>My Class</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Seat</th>
        <th>Enrolled Student</th>
        <th>Price</th>
        <th>Status</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
    
    {
        classes.map((classList,index)=>(
            <tr>
            <th>
                {`${index+1}`}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classList.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            {console.log(classList)}
            <td className="font-bold">{classList.className}</td>
            <td className="font-bold">{classList.AvailableSeat}</td>
            <td className="font-bold">{classList.enrolled}</td>
            <td className="font-bold">${ `${classList.price}`}</td>
            <th>
              <button  className="btn btn-ghost bg-[#FFAEBC] btn-xs">{classList.status}</button>
            </th>
            <td>
                      <label
                        htmlFor="my_modal_6"
                        className="btn bg-orange-300 hover:bg-orange-500 px-2 py-1 rounded-sm"
                        onClick={() => setFeedbackData(classList.feedback ? classList.feedback : 'No Feedback')}
                        
                      >
                        <FcFeedback className="text-2xl"></FcFeedback>
                      </label>

                      
                      <input
                        type="checkbox"
                        id="my_modal_6"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box">
                          
                          <p className="py-4 border-emerald-600 border-2 rounded-xl px-3">
                          {feedbackData}
                          </p>
                          <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn bg-emerald-500 hover:bg-emerald-700">
                              Close!
                            </label>
                          </div>
                        </div>
                      </div>
                    
                    </td>
          </tr>
        ))
    }

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default MyClass;