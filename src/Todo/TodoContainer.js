import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import {
  deleteTodo,
  checkTodo,
  updateTodo,
} from '../dataControl/actions/todoActions';
import Todo from '../dataControl/model/todo';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    WebkitPaddingStart: 0,
    listStyleType: 'none',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    WebkitPaddingStart: 0,
    listStyleType: 'none',
    // overflowY: 'auto',
    // maxHeight: 500,
  },
};

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(Todo),
  ),
};

const defaultProps = {
  items: [],
};

class TodoContainer extends PureComponent {

  handleDelete = (index) => {
    const todo = this.props.items[index];
    this.props.dispatch(deleteTodo(todo.id));
  };

  handleCheck = (index) => {
    const todo = this.props.items[index];
    this.props.dispatch(checkTodo(todo.id));
  };

  handleUpdate = (index, newContent) => {
    const todo = this.props.items[index];
    this.props.dispatch(updateTodo(todo.id, newContent));
  };

  render() {
    const items = this.props.items.map((value, index) => {
      return (
        <TodoItem
          key={`${value.id}`}
          title={value.title}
          done={value.done}
          checkHandler={() => {this.handleCheck(index)}}
          deleteHandler={() => {this.handleDelete(index)}}
          updateHandler={(newContent) => {this.handleUpdate(index, newContent)}}
        />
      );
    });

    return (
      <ul style={styles.list}>
        {items}
      </ul>
    );
  }
}

TodoContainer.propTypes = propTypes;
TodoContainer.defaultProps = defaultProps;

export default connect()(TodoContainer);
