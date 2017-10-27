import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import TodoSaver from '../myMiddleware/storager';

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(TodoSaver),
  );
};

/**
 * 关于 state 在哪里进行初始化的问题
 * 
 * https://stackoverflow.com/questions/33749759/read-stores-initial-state-in-redux-reducer/33791942#33791942
 */

const storage = JSON.parse(localStorage.getItem('todos'));
let preloaded;
if (storage) {
  preloaded = {
    todoReducer: {
      todos: storage,
    },
  };
}

const store = configureStore(preloaded);

export default store;

