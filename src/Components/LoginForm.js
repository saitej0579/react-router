import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const LoginForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: '', password: ''
    })

    const changeHandler = (e) => {
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }


    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const formHandler = () => {
        setIsLoggedIn(true)
        toast.success('Logged in')
        navigate('/dashboard')
    }
    return (
        <form onSubmit={formHandler} className="mt-5">
            <label className="flex flex-col gap-2">
                <p>
                    Email Address
                    <sup className='text-red-600'> *</sup>
                </p>
                <input
                    className='w-full p-3 bg-richblack-800 rounded-md border border-richblack-700'
                    required
                    placeholder="Enter email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                />
            </label>

            <label className="flex flex-col gap-2 mt-4">
                <p>
                    password
                    <sup className='text-red-600'>*</sup>
                </p>
                <input
                    className='w-full p-3 bg-richblack-800 rounded-md border border-richblack-700'
                    required
                    placeholder="Enter Password"
                    type={showPassword ? ('text') : ('password')}
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                />
                <span onClick={() => setShowPassword(!showPassword)} className="relative -top-10 left-[420px]">
                    {showPassword ? (<IoIosEye />) : (<IoIosEyeOff />)}
                </span>
                <Link to='#'>
                    <p className="text-blue-100 text-xs max-w-max ml-auto relative -top-7">Forgot Password</p>
                </Link>
            </label>

            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-900 bg-yellow-400 px-[12px] py-[8px] gap-x-2 mt-6">
                Sign In
            </button>


        </form>
    );
};

export default LoginForm;
