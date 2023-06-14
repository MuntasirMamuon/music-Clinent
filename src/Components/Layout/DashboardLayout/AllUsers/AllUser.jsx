import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FcVoicePresentation } from "react-icons/fc";
const AllUser = () => {
  //  Create a new QueryClient instance
   const[axiosSecure]=useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://assignment-12-server-steel.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin Successfully`);
        }
      });
  };
 

  const handleMakeInstructor=(user)=>{
    fetch(`https://assignment-12-server-steel.vercel.app/user/instructor/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
            toast.success(`${user.name} is an instructor Successfully`);
          }
        });
  }
  return (
    <div className="w-full">
      {users.length}
      <h2>users</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn  text-white bg-[#fa538d] btn-ghost "
                    >
                      {" "}
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                   {
                    user.role === 'instructor' ?('instructor') :(<button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn  text-white bg-[#4db5ff] btn-ghost "
                      >
                        {" "}
                        < FcVoicePresentation/>
                      </button>)
                   }
             

                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
