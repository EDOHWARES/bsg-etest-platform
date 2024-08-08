import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <section className='w-screen mx-auto'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>    
    </section>
  )
}

export default App
