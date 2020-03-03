import React, {Component} from 'react';
import {
  HomeWrapper,
  Hero,
  HomeHeading,
  HomeSection
} from './Home.styles';
import Robots from './Robots/Robots';
import Awards from './Awards/Awards';
import ContactUs from './ContactUs/ContactUs';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Hero src='arcadia-banner.png' />
        <HomeSection id='our-mission'>
          <HomeHeading>Our Mission</HomeHeading>
          <div>
            Arcadia Titan Robotics’ mission is to spread awareness of Science, Technology, Engineering, and Mathematics to 
            students aspiring to achieve a variety of things. We build and operate our robots while upholding all of the values 
            presented by FIRST®, and take pride in our constant gracious professionalism as we act as a cooperative team. 
          </div>
        </HomeSection>
        <HomeSection id='our-robots'>
          <HomeHeading>Our Robots</HomeHeading>
          <Robots />
        </HomeSection>
        <HomeSection id='our-awards'>
          <HomeHeading>Our Awards</HomeHeading>
          <Awards />
        </HomeSection>
        <HomeSection id='contact-us'>
          <HomeHeading>Contact Us</HomeHeading>
          <ContactUs />
        </HomeSection>
      </HomeWrapper>
    );
  }
}

export default Home;