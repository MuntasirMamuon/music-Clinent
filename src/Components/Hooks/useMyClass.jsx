import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";




const useMyClass=()=>{
  
    const {user}=useAuth()
    const [axiosSecure]=useAxiosSecure()
    const {data:myClass,isLoading:isClassLoading}=useQuery({
        queryKey:['myClass',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/addClass/${user.email}`);
   
            return res.data
        }
    })
    return [myClass,isClassLoading]
}

export default useMyClass;