import React, { Component, PropTypes } from 'react';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux'
import AppNavigator from '../navigator';

@connect(
  state => ({
    nav: state.nav
  }),
  dispatch => ({ dispatch })
)

export default class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  }

  render() {
    const { dispatch, nav } = this.props;
    return <AppNavigator 
      navigation={addNavigationHelpers({ dispatch, state: nav})}
    />
  }
}
