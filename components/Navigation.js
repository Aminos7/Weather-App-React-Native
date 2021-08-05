import About from './About'
import Search from './Search'
import React from 'react'
import { DefaultTheme, BottomNavigation} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000a12',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: 'white',
  },
};

export default class Nav extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'About', title: 'About', icon: 'home' },
      { key: 'Search', title: 'Search', icon: 'account-circle' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    About: About,
    Search: Search,
  });

  render() {
    return (
      <BottomNavigation
        theme={theme}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}