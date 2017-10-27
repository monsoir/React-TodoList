import React, { PureComponent } from 'react';

const styles = {
  title: {
    fontSize: '40px',
    textAlign: 'center',
  },
};

export default class extends PureComponent {
  render() {
    return (
      <div style={styles.title}>
        {this.props.title}
      </div>
    );
  }
}