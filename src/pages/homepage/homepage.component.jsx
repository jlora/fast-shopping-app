import React from 'react';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/collection/collection.actions';

import CollectionsHomeContainer from '../../components/collections-home/collections-home.container';
import { HomePageContainer } from './homepage.styles';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render(){
    return (
      <HomePageContainer>
        <CollectionsHomeContainer />
      </HomePageContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);

