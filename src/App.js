import { useState } from 'react';
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import About from './pages/About';
import Contact from './pages/Contact'
import Signup from './pages/Signup'
function App() {
  // so initailly the logges state is false
  const [isLogged,setIsLoggedIn] = useState(false)
  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col'>
      <Navbar isLogged={isLogged} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home></Home>}/> 
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}/>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}/>
      </Routes>
    </div>
  );
}

export default App;
