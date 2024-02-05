import './App.css'
import { Routes, Route } from 'react-router-dom'
//Page imports
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
