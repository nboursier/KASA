

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import P404 from './pages/P404'
import Logementsp from './pages/Logementsp'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Logementsp/:id" element={<Logementsp />} />
      <Route path="*" element={<P404 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
