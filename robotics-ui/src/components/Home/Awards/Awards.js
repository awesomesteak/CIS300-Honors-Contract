import React, {Component} from 'react';
import {
  AwardsTable,
  AwardsHeader,
  AwardsRow,
  AwardsCell
} from './Awards.styles';
import ourAwards from '../../../data/ourAwards';

class Awards extends Component {
  render() {
    return(
      <AwardsTable>
        <AwardsRow>
          <AwardsHeader className='award-name'>Award Name</AwardsHeader>
          <AwardsHeader className='regional'>Regional</AwardsHeader>
          <AwardsHeader>Year</AwardsHeader>
          <AwardsHeader>Description</AwardsHeader>
        </AwardsRow>
        {ourAwards.map(award => {
          return(
            <AwardsRow>
              <AwardsCell className='award-name'>{award.awardName}</AwardsCell>
              <AwardsCell className='regional'>{award.regional}</AwardsCell>
              <AwardsCell>{award.year}</AwardsCell>
              <AwardsCell className='left-align'>{award.description}</AwardsCell>
            </AwardsRow>
          );
        })}
      </AwardsTable>
    );
  }
}

export default Awards;