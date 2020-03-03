import React, {Component} from 'react';
import {
  FooterWrapper
} from './Footer.styles';

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div>Copyright © 2020 Arcadia Titans FIRST Robotics</div>
        <a>titanrobotics3187@gmail.com</a>
      </FooterWrapper>
    );
  }
}

export default Footer;