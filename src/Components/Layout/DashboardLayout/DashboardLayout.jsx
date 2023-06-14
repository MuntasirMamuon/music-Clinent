import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useAuth from "../../Hooks/useAuth";
import useStudent from "../../Hooks/useStudent";
import useStudentSelectClass from "../../Hooks/useStudentSelectClass";
import { AiOutlineCreditCard ,AiOutlineHistory} from "react-icons/ai";
import { BsFillHouseFill ,BsBookFill} from "react-icons/bs";
import { FcAcceptDatabase,FcApproval,FcNeutralTrading,FcReading } from "react-icons/fc";
const DashboardLayout = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  // const isAdmin=true;




  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col ">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#272c4a] text-base-content">
          <div className="avatar">
            <div className="w-24 mx-auto rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h2 className="text-white text-center font-bold mb-3 mt-2">
            User Name: {`${user?.displayName}`}
          </h2>
          {/* Sidebar content here */}
          {isAdmin && (
            <>
              <li>
                <Link to="manageClass"><BsBookFill/> Manage Classes</Link>
              </li>
              <li>
                <Link to="allUsers"><AiOutlineCreditCard/> Manage Users</Link>
              </li>
            </>
          )}

          {/*Instructor part  */}

          {isInstructor?.instructor && (
            <>
              <li className="text-3xl font-bold">
                <Link to="addClass"><FcAcceptDatabase/> Add a Class</Link>
              </li>
              <li>
                <Link to="myClass"><FcApproval/> My Classes</Link>
              </li>
              <li>
                <Link to='#'><FcNeutralTrading/> Total Enrolled </Link>
              </li>
            </>
          )}

          {/* normal student  */}
          {
         !isInstructor?.instructor&&!isAdmin &&(
              <>
              <li className="">
                <Link to="mySelectedClass"><FcReading/> My Selected Classes</Link>
              </li>
              <li>
                <Link to='enrolledClass'><FcApproval/> My Enrolled Classes</Link>
              </li>
              <li>
                <Link to='enrolledPayments'><AiOutlineHistory/>
                 My Enrolled Classes Payments</Link>
              </li>
            </>
            )

           
          }

          {/* conditional toggle hbe er opore */}
          <div className="divider"></div>
          <li>
            <Link to="/"><BsFillHouseFill/> Home</Link>
          </li>
          <li>
            <Link to="/dfdf">All Class</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
