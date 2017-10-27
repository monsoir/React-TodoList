import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  input: {
    display: 'flex',
    flex: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
    height: 35,
    outline: 'none',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
};

const propTypes = {
  confirmHandler: PropTypes.func,
};

const defaultProps = {
  confirmHandler: null,
};

class InputBar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleBlur = (event) => {
    this.actionConfirm(event.target.value);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.actionConfirm(event.target.value);
    }
  };

  handleTextChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  actionConfirm = (content) => {
    if (content && this.props.confirmHandler) {
      this.props.confirmHandler(content);
      this.setState({
        content: '',
      });
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <input
          type="text"
          style={styles.input}
          placeholder={"I'm going to do..."}
          onBlur={this.handleBlur}
          onKeyPress={this.handleKeyPress}
          value={this.state.content}
          onChange={(event) => {this.handleTextChange(event)}}
        />
      </div>
    );
  }
}

InputBar.propTypes = propTypes;
InputBar.defaultProps = defaultProps;

export default InputBar;
