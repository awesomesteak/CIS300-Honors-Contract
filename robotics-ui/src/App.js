import React, {Component} from 'react';
import {
  AppContainer,
  AppWrapper,
  BackToTop
} from './App.styles';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AppContainer>
      <AppWrapper>
        <NavBar />
        <Home />
        <Footer />
      </AppWrapper>
      <BackToTop href='#nav'>
          <img src='up-arrow.png' />
      </BackToTop>
    </AppContainer>
  );
}

export default App;
