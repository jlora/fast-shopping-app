import styled from 'styled-components';

export const ShoppingCartContainerGrid = styled.div.attrs( props => ({
  className: "ms-Grid",
  dir: "ltr"
}))``;

export const ShoppingCartContainerGridRow = styled.div.attrs(props => ({
  className: "ms-Grid-row"
}))`
  height: 100px;
`;

export const ShoppingCartContainerGridColumnLg12 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-sm6 ms-md8 ms-lg12"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  .spanpartypopper {
    font-size: 64px;
  }
  h2{
    font-size: 42px;
  }
  h3 {
    font-size: 24px;
    font-weight: 300;
  }
  h3 span {
    font-size: 24px;
    font-weight: 600;
  }
`;
