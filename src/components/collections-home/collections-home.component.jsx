import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/collection/collection.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { CollectionMenuContainer } from './collections-home.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionMenuContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <MenuItem key={id} {...otherCollectionProps} />
    ))}
  </CollectionMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
