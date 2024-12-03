import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Projects from './Pages/Project/Projects';
import Contact from './Pages/Contact/Contact';
import NavBar from './NavBar';
import Footer from './Pages/Footer/Footer';
function App() {

  return (
    <div className='App'>
            <div className='glow_div'></div>
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/projects' element={<Projects />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
  )
}

export default App
