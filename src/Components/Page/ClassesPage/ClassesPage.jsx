import React, { useEffect, useState } from "react";
import ClassesPageCard from "./ClassesPageCard";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { toast } from "react-hot-toast";

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const[isAdmin]=useAdmin()
 const[isInstructor]=useInstructor()
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    fetch("https://assignment-12-server-steel.vercel.app/addClass")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.filter(
          (classAll) => classAll?.status === "approved"
        );

        setClasses(newData);
      });
  }, []);





  const handleEnroll = (enroll) => {
    const{AvailableSeat,className,email,image,name,price,student,ClassId}=enroll
   
    const saveClassData={ ClassId,AvailableSeat,className,email,image,name,price,student
    }

   
   if(isAdmin || isInstructor?.instructor){
toast.error("Don't permission Select class")
  //  alert('hbe na')
 
   }else{
    if (user) {
      fetch("https://assignment-12-server-steel.vercel.app/select", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveClassData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to enroll the class",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
   }
   
  };
 
  return (
    <div className=" ">
      <h1 className="text-center font-bold text-5xl text-green-700">Enroll Classes</h1>
     <div className="w-11/12 mx-auto gap-5 grid   md:grid-cols-2 lg:grid-cols-4">
      
     
        {classes.map((tea) => (
          <ClassesPageCard
            key={tea._id}
            handleEnroll={handleEnroll}
            tea={tea}
          ></ClassesPageCard>
        ))}
    
     </div>
    </div>
  );
};

export default ClassesPage;
