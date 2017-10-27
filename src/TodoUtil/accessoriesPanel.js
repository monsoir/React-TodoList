import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TouchableOpacity from '../utils/UI/TouchableOpacity';
import { clearTodo } from '../dataControl/actions/todoActions';

const styles = {
  panel: {
    position: 'fixed',
    right: 20,
    top: 80,
    width: window.innerWidth * 0.15,
    borderWith: 0,
    minHeight: 100,
    borderLeft: '1px solid',
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  accessory: {
    cursor: 'pointer',
    outline: 0,
    borderWidth: 0,
    background: 'white',
    fontSize: 18,
    fontFamily: 'Futura',
  },
};

class AccessoriesPanel extends PureComponent {

  handleClear = () => {
    this.props.dispatch(clearTodo());
  };

  render() {
    return (
      <div style={styles.panel}>
        <ul style={styles.container}>
          <li>
            <TouchableOpacity
              style={styles.accessory}
              onClick={this.handleClear}
            >
              {'Clear'}
            </TouchableOpacity>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(AccessoriesPanel);
