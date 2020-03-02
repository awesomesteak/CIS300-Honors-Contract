import styled from 'styled-components';

export const NavWrapper = styled.nav`
  
`;

export const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #3159BE;
  color: white;
`;

export const Logo = styled.img`
  width: 75px;
  margin: 10px;
`;

export const NavTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  text-shadow: 5px 5px 5px black;
`;

export const NavBody = styled.div`
  display: flex;
  padding-left: 20px;
  background-color: #1a326f;
  color: white;

  & a {
    margin: 10px;
    font-size: 1.65em;
  }

  & a:link, a:visited {
    color: white;
    text-decoration: none;
  }
`;