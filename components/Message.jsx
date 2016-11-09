import React from 'react';

const Message = React.createClass({
  // Setting propTypes ensure that your component is used correctly
  propTypes: {
    message: React.PropTypes.object
  },

  render() {
  	const {name, message} = this.props.message;

  	return <p>{name}: {message}</p>;
  }
});

export default Message;