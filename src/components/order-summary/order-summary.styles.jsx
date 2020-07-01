import styled from 'styled-components';

export const OrderSummaryContainer = styled.div `
  width: 60%;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const OrderSummaryContainerFields = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;


export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  overflow: scroll;
  border: 1px solid black;
`;

export const PlaceOrderButtonContainer = styled.div`
  display: flex;
  height: 15%;
  justify-content: flex-end;
  align-items: center;
`;

export const OrderSummaryTitle = styled.h2`
`;


export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 25%;
  text-align: center;
  font-weight: bold;
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 24px;
`;
