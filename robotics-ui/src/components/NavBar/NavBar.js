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
          <a href='#our-mission'>Our Mission</a>
          <a href='#our-robots'>Our Robots</a>
          <a href='#our-awards'>Our Awards</a>
          <a href='#contact-us'>Contact Us</a>
        </NavBody>
      </NavWrapper>
    );
  }
}

export default NavBar;