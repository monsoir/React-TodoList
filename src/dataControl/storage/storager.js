import {
  ADDTODO,
  UPDATETODO,
  CHECKTODO,
  DELETETODO,
} from '../actions/todoActions';

/* eslint-disable */
const TodoSaver = store => next => action => {
  next(action);
  if (action.type === ADDTODO || action.type === UPDATETODO || action.type === CHECKTODO || action.type === DELETETODO) {
    const todos = store.getState().todoReducer.todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};
/* eslint-disable */

export default TodoSaver;
