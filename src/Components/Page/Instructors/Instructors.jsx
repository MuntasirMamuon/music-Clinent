import React, { useEffect, useState } from "react";
import useInstructor from "../../Hooks/useInstructor";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructor] = useInstructor();

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-server-steel.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const teachers = data?.filter(
          (teacher) => teacher.role === "instructor"
        );
        setInstructors(teachers);
      });
  }, []);

  return (
    <div className="" >
           <h1 className="text-center font-bold text-5xl text-green-700">Instructor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-20  gap-3">
     
        {
            instructors.map(tea=><InstructorCard key={tea._id} tea={tea}></InstructorCard>)
        }
     </div>
    </div>
  );
};

export default Instructors;
