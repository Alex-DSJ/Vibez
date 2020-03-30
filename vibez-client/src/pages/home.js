import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'
import Scream from '../components/Scream';
import Profile from '../components/Profile';

import {connect} from 'react-redux'
import {getScreams} from '../redux/actions/dataActions'
class home extends Component {
  //no more state, get it from the props from redux
  componentDidMount() {
    this.props.getScreams()
  }
  render() {
    const {screams, loading} = this.props.data;
    let recentScreamsMarkup = !loading ? (
     screams.map(scream => 
        <Scream key={scream.screamId} scream={scream} />
      )
    ) : (
      <p>loading...</p>
    );
    return (
      <Grid container spacing={2}>
        {' '}
        {/* 16 doesn't work, using spacing={2} instead */}
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => (
  {
    data: state.data
  }
)

export default connect(mapStateToProps, {getScreams})(home);
