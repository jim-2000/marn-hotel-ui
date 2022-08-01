import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/home/homePage';
import Hotel from './pages/about/Hotel';
import HotelList from './pages/Hotels/HotelList';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/hotels' element={<HotelList />} />
      <Route path='/hotels/:id' element={<Hotel />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
