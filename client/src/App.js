import logo from './logo.svg';
import './App.css'; 
import Login from './Components/Login';
import CategoryList from './Components/CategoryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useState} from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
   <>  
      <BrowserRouter>
      <Routes>
          <Route path="/home" element={<CategoryList />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          {/* <Route path="register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
