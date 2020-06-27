import styled from 'styled-components';


export const CheckOutButtonContainer = styled.button`
  min-width: 100px;
  width: auto;
  height: 22px;
  letter-spacing: 0.5px;
  line-height: 16px;
  padding: 0 15px 0 15px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
