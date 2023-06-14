import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const PopularInstructor = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-12-server-steel.vercel.app/popularInstructor`)
      .then((res) => res.json())
      .then((data) => setPopularInstructor(data));
  }, []);

  return (
   <>
   <h1 className="text-4xl text-[#46045e]  font-bold text-center mb-16 mt-20">Popular Instructor</h1>
   <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 gap-2 lg:grid-cols-3">
     
       {
        popularInstructor?.map(popular=>(<>
         <div className="card w-96 bg-base-100 shadow-xl">

         <figure
        key={popular._id}>
          <img className="rounded-lg h-72"
            src={popular.photoURL}
            alt="Shoes"
          />
        </figure>


         </div>
       
 

        </> ))
       }
    
    </div>
   
   </>
  );
};

export default PopularInstructor;
