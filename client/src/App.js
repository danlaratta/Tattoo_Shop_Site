import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Artists from './pages/artists/Artists';
import Book from './pages/book/Book';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/book' element={<Book />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
