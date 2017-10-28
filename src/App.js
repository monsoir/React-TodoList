import React from 'react';
import { Provider } from 'react-redux';
import store from './dataControl/store/store';
// import logo from './logo.svg';
import MainContainer from './MainContainer';
import Panel from './TodoUtil/accessoriesPanel';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MainContainer />
      </div>
    </Provider>
  );
};

export default App;
