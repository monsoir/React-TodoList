export const CHECKTODO = 'check-todo';
export const DELETETODO = 'delete-todo';
export const ADDTODO = 'add-todo';
export const UPDATETODO = 'update-todo';
export const CLEARTODO = 'clear-todo';

export const checkTodo = (id = null) => ({
  type: CHECKTODO,
  id,
});

export const deleteTodo = (id = null) => ({
  type: DELETETODO,
  id,
});

export const addTodo = (title = '') => ({
  type: ADDTODO,
  title,
});

export const updateTodo = (id = null, title = '') => ({
  type: UPDATETODO,
  id,
  title,
});

export const clearTodo = () => ({
  type: CLEARTODO,
});
