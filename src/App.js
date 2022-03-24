import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login'


export default function App (){
   return (
     <>
     <nav>
      <Link to="/Home">Home</Link>
      <Link to="/Login">Login</Link>
     </nav>
     <Routes>
       <Route path="/Home" element={<Home/>}/>
       <Route path="/Login" element={<Login/>}/>
     </Routes>
     </>
   )
}

