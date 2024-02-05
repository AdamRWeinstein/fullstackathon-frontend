import { useState, useEffect } from 'react'
import './App.css'
import {Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Rides from './components/Rides'
import RideDetail from './components/RideDetail'
import RideForm from './components/RideForm'

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <header></header>

      <main>
        <Routes>
          <Route>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        <NavBar />
        <Rides />
        <RideForm />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
