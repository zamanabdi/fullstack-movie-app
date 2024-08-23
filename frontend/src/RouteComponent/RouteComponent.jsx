import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../Container/Home/Home';
import About from '../Container/About/About';
import Movies from '../Container/Movies/Movies';
import TvSeries from '../Container/TvSeries/TvSeries';
import Search from '../Container/Search/Search';
import Details from '../Container/Details/Details';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Login from '../Container/Login/Login';

const RouteComponent = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/movies' element={<Movies/>}/> 
       <Route path='/series' element={<TvSeries/>}/>
       <Route path='/search' element={<Search/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/details/:movieid/:mediatype' element={<Details/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default RouteComponent
