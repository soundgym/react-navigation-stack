import * as React from 'react';
import { Dimensions, Button, View } from 'react-native';
import { withNavigation, Themed } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Buttons = withNavigation(props => (
  <>
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate('Details')}
    />
    <Button
      title="Go and then go to details quick"
      onPress={() => {
        props.navigation.pop();
        setTimeout(() => {
          props.navigation.navigate('Details');
        }, 100);
      }}
    />
    <Button
      title="Go to Headerless"
      onPress={() => props.navigation.navigate('Headerless')}
    />
    <Button title="Go back" onPress={() => props.navigation.goBack()} />
    <Button
      title="Go back quick"
      onPress={() => {
        props.navigation.pop();
        setTimeout(() => {
          props.navigation.pop();
        }, 100);
      }}
    />
    <Button
      title="Go back to all examples"
      onPress={() => props.navigation.navigate('Home')}
    />
    <Themed.StatusBar />
  </>
));

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'List',
  };

  componentDidMount() {
    console.log('ListScreen didMount');
  }

  componentWillUnmount() {
    console.log('ListScreen willUnmount');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Themed.Text>List Screen</Themed.Text>
        <Themed.Text>A list may go here</Themed.Text>
        <Buttons />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    gestureResponseDistance: {
      horizontal: Dimensions.get('window').width,
    },
  };

  componentDidMount() {
    console.log('DetailsScreen didMount');
  }

  componentWillUnmount() {
    console.log('DetailsScreen willUnmount');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Themed.Text>Details Screen</Themed.Text>
        <Button title="Go back in 2s" onPress={this._goBackInTwoSeconds} />
        <Buttons />
      </View>
    );
  }

  _goBackInTwoSeconds = () => {
    setTimeout(() => {
      this.props.navigation.goBack();
    }, 2000);
  };
}

class HeaderlessScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    console.log('HeaderlessScreen didMount');
  }

  componentWillUnmount() {
    console.log('HeaderlessScreen willUnmount');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Themed.Text>Headerless Screen</Themed.Text>
        <Buttons />
      </View>
    );
  }
}

export default createStackNavigator(
  {
    List: ListScreen,
    Details: DetailsScreen,
    Headerless: HeaderlessScreen,
  },
  {
    initialRouteName: 'List',

    // these are the defaults
    cardShadowEnabled: true,
    cardOverlayEnabled: false,

    // headerTransitionPreset: 'uikit',
  }
);
