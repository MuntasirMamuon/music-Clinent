import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import music from '../../assets/feedback.gif'


import { toast } from 'react-hot-toast';
const FeedBackHome = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofcvjif', 'template_v3yaldf', form.current, 'eOo1aqeBXKdgNTlnS')
      .then((result) => {
          toast.success('Feedback successfully ')
          console.log(result);
      }, (error) => {
        console.log(error);
        toast.success('Feedback Unsuccessfully ')
      });
  };

    return (
        <div>
            <div>
            <h1 className='text-center my-10 font-semibold text-3xl text-orange-600'>Student Feedback</h1>
            
            <div className="hero min-h-fit">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-orange-600">Student Feedback !</h1>
      <div className="rating mt-3">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form ref={form} onSubmit={sendEmail}>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-600 font-semibold">Name</span>
          </label>
          <input type="text" placeholder="Name" name="user_name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-600 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" name="user_email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-600 font-semibold">Feedback</span>
          </label>
          <textarea type="text" name="message" placeholder="give your valuable feedback here..." className="input input-bordered" />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Submit' className="btn login-btn font-bold"/>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default FeedBackHome;
