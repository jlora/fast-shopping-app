import styled from 'styled-components';
//import CustomButton from '../custom-button/custom-button.component';
import { DefaultButton } from 'office-ui-fabric-react';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 40px;
  right: 40px;
  z-index: 5;
`;

export const CartDropdownButton = styled(DefaultButton)`
  margin-top: auto;
  width: 100%;
  div {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
