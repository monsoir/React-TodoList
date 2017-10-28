import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    overflowX: 'scroll',
  },
  title: {
    flex: 4,
    height: 30,
    fontSize: 20,
    outline: 'none',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    padding: 0,
  },
  accessoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10,
  },
  accessory: {
    flex: 1,
    cursor: 'pointer',
    borderWidth: 0,
    outline: 0,
    width: 30,
    height: 30,
    backgroundColor: 'white',
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    flex: 1,
    width: 30,
    height: 30,
  },
};

const propTypes = {
  title: PropTypes.string,
  done: PropTypes.bool,
  checkHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
  updateHandler: PropTypes.func,
};

const defaultProps = {
  title: '',
  done: false,
  checkHandler: null,
  deleteHandler: null,
  updateHandler: null,
};

class Todo extends PureComponent {

  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => {
    return {
      readOnly: true,
    };
  };

  handleMouseDown = (event) => {
    const sender = event.currentTarget;
    sender.style.opacity = 0.5;
  };

  handleMouseUp = (event) => {
    const sender = event.currentTarget;
    sender.style.opacity = 1.0;
  };

  handleCheck = () => {
    if (this.props.checkHandler) {
      this.props.checkHandler();
    }
  }

  handleDelete = () => {
    if (this.props.deleteHandler) {
      this.props.deleteHandler();
    }
  };

  handleStartUpdate = () => {

    if (this.props.done) return;

    this.setState({
      readOnly: false,
    });
  };

  handleEndUpdate = () => {

    if (this.props.done) return;

    if (this.props.updateHandler) {
      this.props.updateHandler(this.input.value);
      this.setState({
        readOnly: true,
      });
    }
  }

  handleKeyPress = (event) => {
    if (!this.state.readOnly && event.key === 'Enter') {
      this.handleEndUpdate();
    }
  };

  renderLeadingAccessories = () => {

    let wrapper = null;
    if (this.props.done) {
      const icon = require('../images/checked.png');
      wrapper = (
        <button
          style={styles.accessory}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseUp}
          onClick={this.handleCheck}
        >
          <img
            style={styles.image}
            src={icon}
            alt={'done?'}
          />
        </button>
      );
    } else if (!this.state.readOnly) {
      const icon = require('../images/edit.png');
      wrapper = (
        <div
          style={styles.accessory}
        >
          <img
            style={styles.image}
            src={icon}
            alt={'editing'}
          />
        </div>
      );
    } else {
      const icon = require('../images/unchecked.png');
      wrapper = (
        <button
          style={styles.accessory}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseUp}
          onClick={this.handleCheck}
        >
          <img
            style={styles.image}
            src={icon}
            alt={'done?'}
          />
        </button>
      );
    }

    return (
      <div style={styles.accessoryContainer}>
        {wrapper}
      </div>
    );
  };

  renderTrailingAccessories = () => {
    return (
      <div style={styles.accessoryContainer}>
        <button
          style={styles.accessory}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseUp}
          onClick={this.handleDelete}
        >
          <img
            style={styles.image}
            src={require('../images/delete.png')}
            alt={'delete!'}
          />
        </button>
      </div>
    );
  };

  render() {
    return (
      <div style={styles.container}>
        {this.renderLeadingAccessories()}
        <input
          type="text"
          style={styles.title}
          defaultValue={this.props.title}
          readOnly={this.state.readOnly}
          onDoubleClick={this.handleStartUpdate}
          onBlur={this.handleEndUpdate}
          onKeyPress={this.handleKeyPress}
          ref={(input) => {this.input = input}}
        />
        {this.renderTrailingAccessories()}
      </div>
    );
  }
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;