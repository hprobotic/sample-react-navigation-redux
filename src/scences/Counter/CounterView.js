//import liraries
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Counter from '../../components/Counter';
import * as CounterActions from './CounterActions';

@connect(
  state => ({
    counter: state.counter
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)
// create a component
class CounterView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <Counter {...this.props} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CounterView;
