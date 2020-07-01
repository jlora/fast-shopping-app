import styled from 'styled-components';
import { Link } from 'office-ui-fabric-react/lib/Link';

export const ShoppingCartContainerGrid = styled.div.attrs( props => ({
  className: "ms-Grid",
  dir: "ltr"
}))``;

export const ShoppingCartContainerGridRow = styled.div.attrs(props => ({
  className: "ms-Grid-row"
}))`
  height: 80px;
`;

export const ShoppingCartContainerGridRowItem = styled.div.attrs(props => ({
  className: "ms-Grid-row"
}))`
  height: 40px;
  border-bottom: 1px solid darkgrey;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
`;

export const ShoppingCartContainerGridColumnLg4 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-md6 ms-lg4"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShoppingCartContainerGridColumnLg1 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShoppingCartContainerGridColumnLg2 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-sm6 ms-md4 ms-lg2"
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShoppingCartContainerGridColumnLg10 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-sm6 ms-md8 ms-lg10"
}))`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ShoppingCartContainerGridColumnLg12 = styled.div.attrs(props => ({
  className: "ms-Grid-col ms-sm6 ms-md8 ms-lg12"
}))`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CheckoutTitle = styled.h2`
`;

export const CheckoutColumnTitle = styled.h3`
`;

export const LinkButton = styled(Link)`
  font-size: 18px;
  font-weight: 400;
`;
