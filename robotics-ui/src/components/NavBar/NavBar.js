import React, {Component} from 'react';
import {
  NavWrapper,
  NavHeader,
  Logo,
  NavTitle,
  NavBody
} from './NavBar.styles';

class NavBar extends Component {
  render() {
    return (
      <NavWrapper id='nav'>
        <NavHeader>
          <Logo src='arcadia-logo.png' />
          <NavTitle>Arcadia Titans FIRST Robotics</NavTitle>
        </NavHeader>
        <NavBody>
          <a href='#about-us'>About Us</a>
          <a href='#our-robots'>Our Robots</a>
          <a>Our Awards</a>
        </NavBody>
      </NavWrapper>
    );
  }
}

export default NavBar;