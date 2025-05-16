import Template from "../Components/Template";
import signupImage from '../assets/signup.png'
function Signup({ setIsLoggedIn }) {
  return (
     <div className="bg-richblack-900">
      <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImage}
      type="signup"
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
     </div>
  );
}

export default Signup;
