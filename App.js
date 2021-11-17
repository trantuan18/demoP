import React, { Component } from 'react';
import { Provider } from 'react-redux';
import NavigationApp from 'src/service/navigation';
import store from 'src/service/redux/store';


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
