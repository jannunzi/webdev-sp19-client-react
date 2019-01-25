import React, {Component} from 'react';
class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        This is the message: {this.props.message}
      </h1>
    )}}
export default Message;
