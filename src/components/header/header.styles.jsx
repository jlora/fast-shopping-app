import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainerGrid = styled.div.attrs( props => ({
  className: "ms-Grid",
  dir: "ltr"
}))``;

export const HeaderContainerGridRow = styled.div.attrs( props => ({
  className: "ms-Grid-row"
}))``;

export const HeaderContainerGridColumnLogo = styled.div.attrs( props => ({
  className: "ms-Grid-col ms-sm6 ms-md4 ms-lg2"
}))``;

export const HeaderContainerGridColumnMenuItems = styled.div.attrs( props => ({
  className: "ms-Grid-col ms-sm6 ms-md8 ms-lg10"
}))`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
