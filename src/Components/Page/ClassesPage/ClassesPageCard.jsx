import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";


const ClassesPageCard = ({ tea,handleEnroll}) => {

  const { user } = useAuth();

const cardStyle={
  backgroundColor:tea?.AvailableSeat === 0? 'red' :'initial'
}

  const selectedClass = {
    ClassId:tea._id,
    className: tea.className,
    image: tea.image,
    name: tea.name,
    AvailableSeat: tea.AvailableSeat,
    price: tea.price,
    email: tea.email,
    student: user?.email,
  };
  return (
    <div style={cardStyle} className="card w-full bg-[#9bb1ff]    shadow-xl">
      <figure className="px-10 pt-10">
        <img src={tea.image} alt="Shoes" className="rounded-xl" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">ClassName:{tea.className}</h2>
        <p className="font-bold">Instructor Name:{tea.name}</p>
        <span className="font-bold bg-[#9d4edd] w-1/2 rounded-lg p-1 ">AvailableSeat{tea.AvailableSeat}</span>
        <p className="font-bold">Price:${tea.price}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleEnroll(selectedClass)}  className="p-3 rounded-lg login-btn font-bold ">
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesPageCard;
