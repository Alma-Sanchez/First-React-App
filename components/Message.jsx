import React from 'react';
import * as emoji from 'node-emoji';

const Message = React.createClass({
  // Setting propTypes ensure that your component is used correctly
  propTypes: {
    message: React.PropTypes.object
  },

	render() {
		const {name, message} = this.props.message;
		const emojifiedString = emoji.emojify(message);
		
  	return <p>{name}: {emojifiedString}</p>;
  }
});

export default Message;