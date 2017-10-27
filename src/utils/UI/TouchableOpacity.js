import React, { PureComponent } from 'react';

const styles = {
  cursor: 'pointer',
  borderWidth: 0,
  outline: 0,
  opacity: 0.5,
};

export default class TouchableOpacity extends PureComponent {

  setOpacity = (object, opacity) => {
    object.style.opacity = opacity;
  };

  handleMouseDown = (event) => {
    this.setOpacity(event.currentTarget, 0.5);
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  };
  
  handleMouseUp = (event) => {
    this.setOpacity(event.currentTarget, 1.0);
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
    this.setOpacity(event.currentTarget, 1.0);
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    return (
      <button
        style={Object.assign(styles, { ...this.props.style })}
        onMouseDown={(event) => {this.handleMouseDown(event)}}
        onMouseUp={(event) => {this.handleMouseUp(event)}}
        onMouseLeave={(event) => {this.handleMouseLeave(event)}}
        {...this.props}
      >
        {this.props.children} {/* 获取到内嵌的文本 */}
      </button>
    );
  }
}
