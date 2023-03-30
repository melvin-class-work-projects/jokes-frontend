//import React from 'react';
import Jokes from './components/Jokes';
import React, { useState } from 'react';
//import Navbar from './components/Navbar';
import Home from './components/Home';
//import JokeComponent from './components/Jokes';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
//import Navbar from './components/Navbar';


function App() {
  //const [currentPage, setCurrentPage] = useState('home');
  const [activeSection, setActiveSection] = useState('home');
  const handleNavClick = (section) => {
    setActiveSection(section);
  };
 // function handlePageChange(page) {
   // setCurrentPage(page);
  //}
  //let pageContent;

  //if (currentPage === 'home') {
    //pageContent = <Home />;
  //} else if (currentPage === 'jokes') {
    //pageContent = <Jokes />;
  //} else {
    //pageContent = <About />;
  //}

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Jokes App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link active={activeSection === 'home'} onClick={() => handleNavClick('home')}>
              Home
            </Nav.Link>
            <Nav.Link active={activeSection === 'about'} onClick={() => handleNavClick('about')}>
              About
            </Nav.Link>
            <Nav.Link active={activeSection === 'jokes'} onClick={() => handleNavClick('jokes')}>
              Jokes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'jokes' && <Jokes />}
    </>
    //<div className="App">
      //<Jokes />
     
    //</div>
  );
}

export default App;

