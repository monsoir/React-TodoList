import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  handler: PropTypes.func,
};

const defaultProps = {
  title: '',
  handler: null,
};

class Footer extends PureComponent {
  render() {
    return null;
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
