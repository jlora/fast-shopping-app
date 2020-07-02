import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CheckOutDetailPage from './pages/checkout-detail/checkout-detail.component';
import PurchasePage from './pages/purchasepage/purchasepage.component';

import Header from './components/header/header.component';
//import Header from './components/test-to-delete/header.component'

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const PrincipalGrid = styled.div.attrs( props => ({
  className: "ms-Grid",
  dir: "ltr"
}))`
  height: auto;
`;

const HeaderPrincipalContainerGridRow = styled.div.attrs( props => ({
  className: "ms-Grid-row"
}))`
  height: 70px;
`;

const BodyPrincipalContainerGridRow = styled.div.attrs( props => ({
  className: "ms-Grid-row"
}))`
  height: auto;
`;

const PrincipalContainerGridCol = styled.div.attrs( props => ({
  className: "ms-Grid-col ms-sm6 ms-md8 ms-lg10 ms-lg12"
}))``;


const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  
  return (
    <PrincipalGrid>
      <HeaderPrincipalContainerGridRow>
        <PrincipalContainerGridCol>
          <Header />
        </PrincipalContainerGridCol>
      </HeaderPrincipalContainerGridRow>
      <BodyPrincipalContainerGridRow>
        <PrincipalContainerGridCol>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/checkoutdetail' component={CheckOutDetailPage} />
            <Route exact path='/purchasedetail' component={PurchasePage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </PrincipalContainerGridCol>
      </BodyPrincipalContainerGridRow>
    </PrincipalGrid>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
