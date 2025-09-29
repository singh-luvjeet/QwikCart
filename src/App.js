
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupOrLoginPage from './SignupOrLoginPage';
import HomePage from './landingPage/home/HomePage';
import ViewPage from './landingPage/ViewPage/ViewPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';


const App = ()=>{
  return(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupOrLoginPage />} />
      <Route path="/view" element={<ViewPage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>)
}

export default App;



