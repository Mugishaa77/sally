import {useState} from 'react';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
   const [activeSection, setActiveSection] = useState('home');
   const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="App">
            <nav className="navbar bg-body-tertiary fixed-top ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/">Sally Mugisha Wanga</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Portfolio Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home" onClick={() => handleNavLinkClick('home')}>Home</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#home" onClick={() => handleNavLinkClick('home')}>About me</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#home" onClick={() => handleNavLinkClick('home')}>Atlas Tea Brokers</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#home" onClick={() => handleNavLinkClick('home')}>Evergreen Farms Limited</a></li>
               <li>
                <hr className="dropdown-divider"/>
              </li>
                <li><a className="dropdown-item" href="#home" onClick={() => handleNavLinkClick('home')}>Material UI documentation project</a></li>
                 <li>
                <hr className="dropdown-divider"/>
              </li>
                <li><a className="dropdown-item" href="#home" onClick={() => handleNavLinkClick('home')}>Wordpress projects</a></li>
             
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={() => handleNavLinkClick('home')}>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
            <div>
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </div>


      

    </div>
  );
}

export default App;
