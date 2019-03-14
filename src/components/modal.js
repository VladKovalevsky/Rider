import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Modal extends Component {
  render() {
    if(this.props.isOpen === true){
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}  transitionEnterTimeout={700}
          transitionLeaveTimeout={700}>
          {this.props.children}
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName}  transitionEnterTimeout={700}
        transitionLeaveTimeout={700}/>;
    }
  }
}

export default Modal;
