import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/collection/collection.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsHome from './collections-home.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsHomeContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsHome);

export default CollectionsHomeContainer;
