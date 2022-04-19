import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cv from '../pages/Cv';
import Home from '../pages/Home';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import About from '../pages/About';
import styled from 'styled-components'
import Projects from '../pages/Projects';

const NavsContainer = styled.div`
  width: 100vw;
  height: 250px;
  position: absolute;
  z-index: 100;
  top: calc(50vh - 250px/2);
  display:flex;
  justify-content: space-between;
  a {
    color: white;
  }
`

const AppContainer = styled.div`
  padding: 0 70px;
  height: 100vh;
  width: 100vw;
  font-family: 'Grandstander', cursive;
  box-sizing: border-box;
  color: white;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  flex-direction: column;
  -moz-box-shadow:    inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow:         inset 0 0 500px #000000;
`

function App() {
  return (
    <>
      <NavsContainer>
        <LeftNav />
        <RightNav />
      </NavsContainer>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
