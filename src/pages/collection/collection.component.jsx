import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectOneCollection } from '../../redux/collection/collection.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, collectionsProducts } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {collectionsProducts.map(item => (
          <CollectionItem key={item.id} item={item.product} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps.match.params', ownProps.match.params);
  return {
    collection: selectOneCollection(ownProps.match.params.collectionId)(state)
  }
};

export default connect(mapStateToProps)(CollectionPage);
