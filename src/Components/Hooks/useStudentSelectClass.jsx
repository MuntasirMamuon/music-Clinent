import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStudentSelectClass = () => {
    const {user}=useAuth()
    const [axiosSecure]=useAxiosSecure()
    const {data:myData,isLoading:isSelectedClassLoading,refetch}=useQuery({
        queryKey:['myData',user?.email],
        queryFn:async()=>{
            if(user?.email){
                const res=await axiosSecure.get(`/selectedClass?email=${user.email}`);
     
                return res.data
            }
            
           
        }
  
    })
    return [myData,isSelectedClassLoading,refetch]

};

export default useStudentSelectClass;