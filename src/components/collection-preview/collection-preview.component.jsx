import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, collectionsProducts, history, match, linkUrl }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${linkUrl}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {collectionsProducts
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item.product} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
  

export default withRouter(CollectionPreview);
