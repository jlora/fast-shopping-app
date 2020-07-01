import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainerGrid,
  HeaderContainerGridRow,
  HeaderContainerGridColumnLogo,
  HeaderContainerGridColumnMenuItems,
  LogoContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainerGrid>
    <HeaderContainerGridRow>
      <HeaderContainerGridColumnLogo>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
      </HeaderContainerGridColumnLogo>
      <HeaderContainerGridColumnMenuItems>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
          {currentUser ? (
            <OptionLink as='div' onClick={signOutStart}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to='/signin'>SIGN IN</OptionLink>
          )}
        <CartIcon />
         {hidden ? null : <CartDropdown />}
      </HeaderContainerGridColumnMenuItems>
    </HeaderContainerGridRow>
  </HeaderContainerGrid>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
