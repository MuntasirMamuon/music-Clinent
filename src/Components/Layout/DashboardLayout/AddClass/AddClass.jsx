import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// todo 


const AddClass = () => {
  const {user}=useAuth()
  const navigate=useNavigate()
  const[axiosSecure]=useAxiosSecure()
  
  const img_hosting_token=import.meta.env.VITE_IMG_TOKEN;

 const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
   .then((imgResponse)=>{
    if(imgResponse){
      const imgURL = imgResponse.data.display_url;
      const status='pending';
      const { className,name,email,AvailableSeat,price } = data;
      const addClass={
        className,
        image:imgURL,
        name,
        email,
        AvailableSeat:parseInt(AvailableSeat),
        price:parseInt(price),
        status,

      };
   
    
      axiosSecure.post('/addClass',addClass)
      .then((data)=>{
        if(data.data.insertedId){
          reset()
          navigate('/dashboard/myClass')
          toast.success('Add Class Successfully')
        }
      })
    }
   })
  };

    return (
        <div className='my-10 bg-[#272c4a] rounded-xl p-10'>
        <h1 className='text-3xl font-bold text-center mb-4 text-white'>Add Class </h1>
        <form onSubmit={handleSubmit(onSubmit)}  className="card-body grid grid-cols-2 lg:mx-20 rounded-lg border-2 p-4 " >
            
          
            <div className="form-control lg:w-2/3">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <input
                type="text"
                name="className"
                placeholder="Class name"
                {...register("className")}
                className="input input-bordered"
                required
              />
            </div>
           
            <div className="form-control lg:w-2/3">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input
                type="file"
                name="ClassImage"
                placeholder="Available Quantity"
                {...register("image", { required: true })}
                className="input input-bordered"
                required
              />
              </div>
            <div className="form-control w-3/4 ">
              <label className="label">
                <span className="label-text">Instructor name</span>
              </label>
              <input
                type="text"
                name="InstructorName"
                {...register("name")}
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
                required
              />

            </div>
            <div className="form-control w-3/4 ">
              <label className="label">
                <span className="label-text">Instructor email</span>
              </label>
              <input
                type="email"
                name="InstructorEmail"
                {...register("email")}
               defaultValue={user?.email}
               readOnly
                className="input input-bordered"
                required
              />

            </div>
            <div className="form-control w-3/4 ">
              <label className="label">
                <span className="label-text">Available seats</span>
              </label>
              <input
                type="text"
                name="AvailableSeats"
                {...register("AvailableSeat")}
                placeholder="Available Quantity"
                className="input input-bordered"
                required
              />

            </div>
            <div className="form-control w-3/4 ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="Price"
                {...register("price")}
                placeholder="Price"
                className="input input-bordered"
                required
              />

            </div>
            
            <div className="form-control mt-3">
            

            
              <button className="rounded-md btn-block   px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#5a189a] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <input
                  type="submit"
                  className="relative w-64 text-indigo-600 transition duration-300 group-hover:text-white ease"
                  value="Add button"
                />
              </button>
            </div>
          </form>
    </div>
    );
};

export default AddClass;