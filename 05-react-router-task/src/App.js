import logo from './logo.svg';
import './css/style.css';
import './css/utilities.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import data from './data';
function App() {
  const [easiData, setEasiData] = useState(data);
  return (
    <main className='main-app'>
      <div className='navbar'>
        <div className='container flex'>
          <h1 className='logo'>{easiData.name}</h1>
          <nav id='navigation'>
            <ul>
              <Link to={'/'}> Home </Link>
              <Link to={'/about'}> About </Link>
              <Link to={'/contact'}> Contact Us </Link>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route exact path='/' element={<Home {...easiData} />} />
        <Route path='/about' element={<About {...easiData} />} />
        <Route path='/contact' element={<Contact {...easiData} />} />
      </Routes>
      <footer class='footer bg-dark py-5'>
        <div class='container grid grid-3'>
          <div>
            <h1>Loruki</h1>
            <p>Copyright &copy; 2020</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}> Home </Link>
              </li>
              <li>
                <Link to={'/about'}> About </Link>
              </li>
              <li>
                <Link to={'/contact'}> Contact Us </Link>
              </li>
            </ul>
          </nav>
          <div class='social'>
            <a href='#'>
              <i class='fab fa-github fa-2x'></i>
            </a>
            <a href='#'>
              <i class='fab fa-facebook fa-2x'></i>
            </a>
            <a href='#'>
              <i class='fab fa-instagram fa-2x'></i>
            </a>
            <a href='#'>
              <i class='fab fa-twitter fa-2x'></i>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
