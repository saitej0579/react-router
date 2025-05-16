import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', createPassword: '', confirmPassword: ''
  })
  const changeHandler = (e) => {
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      toast.error('Pass Not Matched');
    }
    else {
      toast.success('Account Created')
      setIsLoggedIn(true);
      navigate('/dashboard')
    }
  }
  // let val = "p-3 bg-richblack-700 rounded-3xl";
  const [val,setVal] = useState('student');
  return (
    <div className="mt-10">

      <div className="bg-richblack-700 max-w-[220px] p-1 flex-row flex justify-between items-center rounded-3xl h-[50px]">
        <button 
          onClick={ ()=> {setVal('student')}}
          className={`${
            val === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>

        <button  onClick={ ()=> {setVal('instructor')}}
          className={`${
            val === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      {/* form       */}
      <form onSubmit={formHandler}>
        <div className="flex flex-row gap-5 mt-5">
          <label className="flex flex-col gap-2">
            <p>
              First Name
              <sup className='text-red-600'>*</sup>
            </p>
            <input
              className='w-full p-3 bg-richblack-800 rounded-md border border-richblack-700'
              required
              placeholder="Enter first name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label className="flex flex-col gap-2">
            <p>
              Last Name
              <sup className='text-red-600'>*</sup>
            </p>
            <input
              className='w-full p-3 bg-richblack-800 rounded-md border border-richblack-700'
              required
              placeholder="Enter last name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <p>
            Email Address
            <sup className='text-red-600'>*</sup>
          </p>
          <input
            className='w-full p-3 bg-richblack-800 rounded-md border border-richblack-700'
            required
            placeholder="Enter your email id"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>

        <div className="flex flex-row gap-5 mt-5">
          <label className="flex flex-col gap-2 mt-4">
            <p>
              Create Password
              <sup className='text-red-600'>*</sup>
            </p>
            <input
              className='w-full p-3 bg-richblack-800 rounded-md border border-richblack-700'
              required
              placeholder="Enter Password"
              type={showPassword1 ? ('text') : ('password')}
              name="createPassword"
              value={formData.createPassword}
              onChange={changeHandler}
            />
            <span onClick={() => setShowPassword1(!showPassword1)} className="relative -top-10 left-[180px]">
              {showPassword1 ? (<IoIosEye />) : (<IoIosEyeOff />)}
            </span>
          </label>

          <label className="flex flex-col gap-2 mt-4">
            <p>Confirm Password
              <sup className='text-red-600'>*</sup>
            </p>
            <input
              className='w-full p-3 bg-richblack-800 rounded-md border border-richblack-700'c
              required
              placeholder="Confirm Password"
              type={showPassword2 ? ('text') : ('password')}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
            />
            <span onClick={() => setShowPassword2(!showPassword2)} className="relative -top-10 left-[180px]">
              {showPassword2 ? (<IoIosEye />) : (<IoIosEyeOff />)}
            </span>
          </label>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-900 bg-yellow-400 px-[12px] py-[8px] gap-x-2 mt-6">
          Create Account
        </button>
      </form>


    </div>
  );
};

export default SignupForm;
