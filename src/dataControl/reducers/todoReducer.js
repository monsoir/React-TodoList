import {
  ADDTODO,
  DELETETODO,
  CHECKTODO,
  UPDATETODO,
  CLEARTODO,
} from '../actions/todoActions';
import initialState from '../initialState';
import Todo from '../model/todo';
import { currentDateString } from '../../utils/dateUtil';

export default function todoOperate(state = initialState, action) {
  switch (action.type) {
    case ADDTODO:
    {
      const aTodo = new Todo(currentDateString(), action.title, false);
      const newTodos = state.todos.slice(0, state.todos.length);
      newTodos.push(aTodo);
      return {
        ...state,
        todos: newTodos,
      };
    }
    case DELETETODO:
    {
      const newTodos = state.todos.slice(0, state.todos.length);
      const deleteIndex = newTodos.findIndex((element) => {
        return element.id === action.id;
      });
      if (deleteIndex >= 0) {
        newTodos.splice(deleteIndex, 1);
        return {
          ...state,
          todos: newTodos,
        };
      }

      return state;
    }
    case CHECKTODO:
    {
      const newTodos = state.todos.slice(0, state.todos.length);
      const tobeDone = newTodos.find((element) => {
        return element.id === action.id;
      });
      if (tobeDone) {
        tobeDone.done = !tobeDone.done;

        return {
          ...state,
          todos: newTodos,
        };
      }

      return state;
    }
    case UPDATETODO:
    {
      if (action.id) {
        const newTodos = state.todos.slice(0, state.todos.length);
        const tobeUpdated = newTodos.find((element) => {
          return element.id === action.id;
        });
        if (tobeUpdated) {
          tobeUpdated.title = action.title;
  
          return {
            ...state,
            todos: newTodos,
          };
        }
      }

      return state;
    }
    case CLEARTODO:
    {
      return {
        ...state,
        todos: [],
      };
    }
    default:
      return state;
  }
}
