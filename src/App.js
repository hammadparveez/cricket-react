import logo from './logo.svg';
import './App.css';
import Slider from "react-slick";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bye' element={<h1> bye</h1>} />
    </Routes>
  </BrowserRouter>
}



export default App;
