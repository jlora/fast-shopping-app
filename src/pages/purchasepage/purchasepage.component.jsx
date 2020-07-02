import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createOrderStart } from '../../redux/shop/shop.actions';

import { selectorCustomer } from '../../redux/customer/customer.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import PurchaseContainer from '../../components/purchase/purchase.container';
import { PurchasePageContainer } from './purchasepage.styles';

class PurchasePage extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    const { createOrderStart, customer, cart, user } = this.props;
    createOrderStart(customer, cart, user);
  }

  render(){
    return (
      <PurchasePageContainer>
        <PurchaseContainer/>
      </PurchasePageContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  customer: selectorCustomer,
  cart: selectCartItems,
  user: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  createOrderStart: (customer, cart, user) => dispatch(createOrderStart(customer, cart, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchasePage);

