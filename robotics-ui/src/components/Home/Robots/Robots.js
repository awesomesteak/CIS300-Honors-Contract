import React, {Component} from 'react';
import {
  RobotContainer,
  RobotWrapper,
  RobotTitle,
  RobotImage,
  RobotDescription
} from './Robots.styles';
import ourRobots from '../../../data/ourRobots';

class Robots extends Component {
  render() {
    return(
      <RobotContainer>
        {ourRobots.map(robot => {
          return(
            <RobotWrapper>
              <RobotImage src={robot.image} />
              <RobotTitle>{robot.year}</RobotTitle>
              <RobotDescription>{robot.description}</RobotDescription>
            </RobotWrapper>
          );
        })}
      </RobotContainer>
    );
  }
}

export default Robots;