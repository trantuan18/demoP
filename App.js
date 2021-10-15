import React, { Component } from 'react';
import { Provider } from 'react-redux';
import NavigationApp from '@src/Service/Navigation';
import store from '@src/Service/Redux/store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationApp />
      </Provider>
    );
  }
}
export default App
