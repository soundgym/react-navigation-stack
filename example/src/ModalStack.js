import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Themed } from 'react-navigation';

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'My Modal',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Themed.Text>List Screen</Themed.Text>
        <Themed.Text>A list may go here</Themed.Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back to all examples"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    // Uncomment below to test inverted modal gesture
    // gestureDirection: 'inverted',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Themed.Text>Details Screen</Themed.Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate('List')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go back to all examples"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default createStackNavigator(
  {
    List: ListScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'List',
    mode: 'modal',
  }
);
