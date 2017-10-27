import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './dataControl/store/store';
// import logo from './logo.svg';
import './App.css';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
