import "./index.css";
import { Routes, Route } from 'react-router-dom'
//Page imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import Search from './components/SearchBooks';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <>
    <div className="tree"> 
    </div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/browse" element={<BrowseBooks />}/>
      <Route path="/details/:id" element={<BookDetails />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  )
}

export default App
