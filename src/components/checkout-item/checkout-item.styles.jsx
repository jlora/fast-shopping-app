import styled from 'styled-components';

export const ShoppingCartContainerGridRowItem = styled.div.attrs(props => ({
  className: "ms-Grid-row"
}))`
  height: 180px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px; 
  border: 1px solid darkgrey;
  font-size: 18px;
  font-weight: 400;
`;

export const ShoppingCartContainerGridColumnLg4 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-md6 ms-lg4"
}))`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ShoppingCartContainerGridColumnLg1 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    cursor: pointer;
  }
`;

export const ShoppingCartContainerGridColumnLg2 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-sm6 ms-md4 ms-lg2"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }

  span {
    margin: 0 15px;
  }
`;
