import './App.css'
import { Routes, Route } from 'react-router-dom'
//Page imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import Search from './components/SearchBooks';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/browse" element={<BrowseBooks />}/>
      <Route path="/details/:id" element={<BookDetails />}/>
      <Route path="/search" element={<Search />}/>
    </Routes>
    </>
  )
}

export default App
