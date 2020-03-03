import styled from 'styled-components';

export const ContactUsForm = styled.form`
  width: 60%;
  display: grid;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-columns: 7em 1fr;

  input, textarea {
    margin-bottom: 0.5em;
  }
`;

export const SubmitButton = styled.input`
  grid-column: 2 / 3;
  width: 15em;
  margin: 0 auto;
  padding: 10px;
  background-color: #3159be;
  color: white;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    background-color: #5987fa;
    box-shadow: 2px 2px 5px black;
  }
`;