import {
  ADDTODO,
  UPDATETODO,
  CHECKTODO,
  DELETETODO,
  CLEARTODO,
} from '../actions/todoActions';

/* eslint-disable */
const TodoSaver = store => next => action => {
  if (action.type === ADDTODO ||
      action.type === UPDATETODO ||
      action.type === CHECKTODO ||
      action.type === DELETETODO ||
      action.type === CLEARTODO) {
    const todos = store.getState().todoReducer.todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  next(action);
};
/* eslint-disable */

export default TodoSaver;
