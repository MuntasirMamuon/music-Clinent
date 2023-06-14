import React from 'react';

const InstructorCard = ({tea}) => {

    return (
        <div className=''>
           <div className="card w-96 bg-base-100 shadow-xl">
              <figure  className="px-10 pt-10">
            <img src={tea.photoURL} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Instructor Name: {tea.name}</h2>
            <p>Instructor Email: {tea.email}</p>
            <div className="card-actions  ">
              <button className="btn btn-primary ">Details</button>
            </div>
          </div>
          </div>
        </div>
    );
};

export default InstructorCard;