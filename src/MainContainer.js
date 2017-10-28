import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Title from './Title/Title';
import Header from './Header/Header';
import Todos from './Todo/TodoContainer';
import InputBar from './InputBar/inputBar';
import {
  addTodo,
  clearTodo,
} from './dataControl/actions/todoActions';
import TouchableOpacity from './utils/UI/TouchableOpacity';

const styles = {
  container: {
    background: 'white',
    marginLeft: '20%',
    marginRight: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    display: 'flex',
    overflowX: 'scroll',
    flex: 1,
  },
  panelInnerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: 20,
    justifyContent: 'flex-start',
    listStyleType: 'none',
  },
  accessory: {
    cursor: 'pointer',
    outline: 0,
    borderWidth: 0,
    background: 'white',
    fontSize: 18,
    fontFamily: 'Futura',
    marginLeft: 2,
    marginRight: 20,
  },
};

const HEIGHTFACTOR = 0.7;

class Container extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      section: 0,
      todosHeight: window.innerHeight * HEIGHTFACTOR,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateTodosHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateTodosHeight);
  }

  updateTodosHeight = () => {
    this.setState({
      todosHeight: window.innerHeight * HEIGHTFACTOR,
    });
  };

  handleAddTodo = (content) => {
    this.props.dispatch(addTodo(content));
  };

  handleClear = () => {
    this.props.dispatch(clearTodo());
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

  renderAccessory = () => {
    return (
      <div style={styles.panel}>
        <ul style={styles.panelInnerContainer}>
          <li>
            <TouchableOpacity
              style={styles.accessory}
              onClick={this.handleClear}
            >
              {'Clear all todos'}
            </TouchableOpacity>
          </li>
        </ul>
      </div>
    );
  };

  render() {

    const headerTitles = ['todo', 'done'];

    return (
      <div style={styles.container}>
        <Title title={'Todo List'} />
        <InputBar confirmHandler={(content) => {this.handleAddTodo(content)}} />
        {this.renderAccessory()}
        <Header
          titles={headerTitles}
          didSelectOn={(index) => {
            this.setState({
              section: index,
            });
          }}
        />
        <div style={{ overflowY: 'scroll', height: this.state.todosHeight }}>
          {this.renderTodo()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
});

export default connect(mapStateToProps)(Container);
