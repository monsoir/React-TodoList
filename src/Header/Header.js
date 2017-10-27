import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    listStyleType: 'none',
    WebkitPaddingStart: 0,
  },
  list: {
    fontSize: '25px',
    padding: '10px',
    cursor: 'pointer',
  },
  selected: {
    color: '#abd2ee',
  },
  normal: {
    color: 'black',
  },
};

const propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  didSelectOn: PropTypes.func,
};

const defaultProps = {
  titles: [],
  didSelectOn: () => {},
};

class Header extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  handleClick = (index) => {
    this.setState({
      selected: index,
    });

    if (this.props.didSelectOn) {
      this.props.didSelectOn(index);
    }
  }

  render() {
    const items = this.props.titles.map((value, index) => {
      return (
        <li
          key={value}
          style={styles.list}
          onClick={() => {this.handleClick(index)}}
        >
          <div style={index === this.state.selected ? styles.selected : styles.normal}>
            {value}
          </div>
        </li>
      );
    });

    return (
      <ul style={styles.container}>
        {items}
      </ul>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

