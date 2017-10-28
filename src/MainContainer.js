import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Title from './Title/Title';
import Header from './Header/Header';
import Todos from './Todo/TodoContainer';
import InputBar from './InputBar/inputBar';
import {
  addTodo,
} from './dataControl/actions/todoActions';

const styles = {
  container: {
    background: 'white',
    marginLeft: '20%',
    marginRight: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class Container extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      section: 0,
    };
  }

  handleAddTodo = (content) => {
    this.props.dispatch(addTodo(content));
  };

  renderTodo = () => {

    let items = [];
    this.props.todos.forEach(function(value) {
      if (value.done ^ (this.state.section === 0)) {
        items.push(value);
      }
    }, this);

    document.title = `Todo List - ${this.state.section === 0 ? 'todo' : 'done'}`;

    return (
      <Todos
        items={items}
        done={this.state.section === 1}
      />
    );
  };

  render() {

    const headerTitles = ['todo', 'done'];

    return (
      <div style={styles.container}>
        <Title title={'Todo List'} />
        <InputBar confirmHandler={(content) => {this.handleAddTodo(content)}} />
        <Header
          titles={headerTitles}
          didSelectOn={(index) => {
            this.setState({
              section: index,
            });
          }}
        />
        {this.renderTodo()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
});

export default connect(mapStateToProps)(Container);
