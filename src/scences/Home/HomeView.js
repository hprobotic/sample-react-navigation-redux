//import liraries
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class HomeView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  toCounter = () => {
    this.props.navigation.navigate('Counter')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeView</Text>
        <Button title="Go to Counter" onPress={this.toCounter} />
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
export default HomeView;
