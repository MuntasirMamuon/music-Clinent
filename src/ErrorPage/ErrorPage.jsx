import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorJson from '.././assets/29894-error-404-page.json'

const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <section className='flex items-center h-screen p-16 bg-emerald-50 text-gray-900'>
        <div className='container items-center justify-around px-5 mx-auto my-8 flex sm:flex-col md:flex-row'>
          <div className='ms-20'>
          <Lottie className="w-1/2" animationData={errorJson} loop={true} />
          
          </div>
         
          <div className='mr-20 max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-7xl text-emerald-500'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='text-2xl text-emerald-600 font-semibold md:text-3xl mb-8'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-emerald-500 hover:bg-teal-600 text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;

//