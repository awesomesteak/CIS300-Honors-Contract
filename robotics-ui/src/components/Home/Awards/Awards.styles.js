import styled from 'styled-components';

export const AwardsTable = styled.table`
  border: 2px solid #044874;
  background-color: #FFFFFF;
  border-collapse: collapse;
`;

export const AwardsHeader = styled.th`
  padding: 0.75em;
  border: 2px solid #044874;
  background-color: #1a326f;
  color: #FFFFFF;
`;

export const AwardsRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #d3eeff;
  }
`;

export const AwardsCell = styled.td`
  padding: 0.75em;
  border: 2px solid #044874;
  text-align: center;

  &.award-name {
    width: 18rem;
  }

  &.regional {
    width: 6rem;
  }

  &.left-align {
    text-align: left;
  }
`;