import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsShopFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import PurchasePage from './purchase.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsShopFetching
});

const PurchaseContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PurchasePage);

export default PurchaseContainer;
