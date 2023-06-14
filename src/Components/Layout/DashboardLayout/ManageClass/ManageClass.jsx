import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const ManageClass = () => {

    const [allClasses,setAllClasses]=useState([])

  

   useEffect(()=>{
    fetch(`https://assignment-12-server-steel.vercel.app/addClass`)
    .then(res=>res.json())
    .then(data=>setAllClasses(data))
   },[allClasses])
  const [axiosSecure] = useAxiosSecure();
 
//   const { data: allClasses = [], refetch } = useQuery(
//     ["allClasses"],
//     async () => {
//       const res = await axiosSecure.get("/addClass");
//       return res.data;
//     }
//   );



const  handleFeedback= (clss) => {
    
  Swal.fire({
    title: "Send Feedback",
    icon: "info",
    html: '<input type="text" id="feedbackInput" placeholder="Enter your feedback" class="input bg-emerald-300 w-full max-w-xs border-error">',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "Send",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      const feedback = document.getElementById("feedbackInput").value;
      console.log(feedback)

      // axiosSecure
      //   .put(`/classesFeedback/${clss}`, { feedback })
      //   .then((res) => {
      //     if (res.data.modifiedCount > 0) {
      //       Swal.fire({
      //         icon: "success",
      //         title: "Class Denied Successfully",
      //         showConfirmButton: false,
      //         timer: 1500,
      //       });
      //       refetch();
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error sending feedback:", error);
      //   });

      fetch(`https://assignment-12-server-steel.vercel.app/classesFeedback/${clss}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({feedback})
      })
      .then(res=>res.json())
      .then(data=>{

        if(modifiedCount > 0){
            //  update state 
           const remaining=allClasses.filter(classes => classes._id !== id)
           const updated=allClasses.find(classes=> classes._id === id);
           updated.status='denied'
           const newClasses=[updated,...remaining];
           setAllClasses(newClasses)
        }
      })
    }
  });

};







// Denied function start 
const handleStatusDenied=id=>{
    fetch(`https://assignment-12-server-steel.vercel.app/addClass/${id}`,{
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({status:"denied"})
      })
      .then(res=>res.json())
      .then(data=>{

        if(modifiedCount > 0){
            //  update state 
           const remaining=allClasses.filter(classes => classes._id !== id)
           const updated=allClasses.find(classes=> classes._id === id);
           updated.status='denied'
           const newClasses=[updated,...remaining];
           setAllClasses(newClasses)
        }
      })
}

// approval status function 


  const handleStatus=id=>{
  fetch(`https://assignment-12-server-steel.vercel.app/addClass/${id}`,{
    method:'PATCH',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify({status:"approved"})
  })
  .then(res=>res.json())
  .then(data=>{

    if(modifiedCount > 0){
        //  update state 
       const remaining=allClasses.filter(classes => classes._id !== id)
       const updated=allClasses.find(classes=> classes._id === id);
       updated.status='approved'
       const newClasses=[updated,...remaining];
       setAllClasses(newClasses)
    }
  })
  }

  return (
    <div>

<div>
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
  
        </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Seat</th>
              <th>Price</th>
              <th>Status</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((classList, index) => (
              <tr>
                <th>{`${index + 1}`}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classList.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{classList.className}</td>
                <td>{classList.AvailableSeat}</td>
                <td>${`${classList.price}`}</td>
                <th>
                 {classList.status ==='approved'? <span className= "rounded-lg p-2 bg-[#ff4d6d] btn btn-ghost btn-xs">approved</span> :<button onClick={()=>handleStatus(classList._id)} className="btn btn-ghost bg-[#FFAEBC] btn-xs">
                    {classList.status}
                  </button>}
                </th>
                <th>
                 {classList.status ==='denied'? <span>denied</span> :<button onClick={()=>handleStatusDenied(classList._id)} className="btn btn-ghost bg-[#FFAEBC] btn-xs">
                    {classList.status}
                  </button>}
                </th>
                <th>
                 <button  htmlFor="my_modal_6" onClick={()=>handleFeedback(classList._id)} className="btn btn-ghost bg-[#0077b6] btn-xs">
                    feedback 
                  </button>

                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
