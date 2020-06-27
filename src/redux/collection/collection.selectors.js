import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectCollections = createSelector(
  [selectCollection],
  collection => collection.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectOneCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => {
      console.log('collection selector', collections);
      const result = collections ? collections.find(collection => {
        console.log('title:', collection.title.toLowerCase());
        console.log('collectionUrlParam:', collectionUrlParam);
        const value = collection.title.toLowerCase() === collectionUrlParam;
        console.log('value:', value);
        return value;
      }) : []
      console.log('result:', result);
      return result;
    }
  );

export const selectIsCollectionFetching = createSelector(
  [selectCollection],
  collection => collection.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectCollection],
  collection => !!collection.collections
);
