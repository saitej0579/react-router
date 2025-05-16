import Template from "../Components/Template";
import loginImage from '../assets/login.png'
function Login({ setIsLoggedIn }) {
  return (
    <div className="bg-richblack-900">
      <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImage}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
    </div>
  );
}

export default Login;
