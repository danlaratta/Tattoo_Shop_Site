import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Book from './pages/book/Book';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Aftercare from './pages/aftercare/Aftercare';
import Dan from './pages/artist-dan/ArtistDan'
import Dana from './pages/artist-dana/ArtistDana'
import Mark from './pages/artist-mark/ArtistMark'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-appointment' element={<Book />} />
          <Route path='/artists/Dan' element={<Dan />} />
          <Route path='/artists/Dana' element={<Dana />} />
          <Route path='/artists/Mark' element={<Mark />} />
          <Route path='/aftercare' element={<Aftercare />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
