import React from 'react';
import Firebase from './firebase-wrapper'; // Import Firebase library
import Message from './components/Message.jsx';
import Input from './components/Input.jsx';
import style from './styles/App.less';

const App = React.createClass({
  getInitialState() {
    return {
      messages: [], // Initialize empty list of messages
      name: 'Alma',
      newMessage: ''
    };
  },

  componentWillMount() {
    Firebase.turnOn(newState => {
      this.setState(newState);
    });
  },

  componentWillUnmount() {
    Firebase.turnOff();
  },

   renderMessageDiv(message) {
    return <Message key = {message.key} message={message} />;
  },

  handleNameChange(event){
    this.setState({name: event.target.value});
  },

  handleMessageChange(event){
    this.setState({newMessage: event.target.value});
  },

  handleKeyPress(event){
    const{name, newMessage} = this.state;
    // if name or message = blank, don't send message
    if(!name || !newMessage){
      return;
    }

    // if user hits enter key
    if(event.key === 'Enter'){
      Firebase.sendMessage({name: name, message: newMessage});
      this.setState({newMessage: ''});
    }
  },

  render() {
    // Iterates through the messages in state to create HTML elements
    // for each message
    const messageDivs = this.state.messages.map(this.renderMessageDiv);
    const {newMessage, name} = this.state;
    
    return (<div>
    <nav className = "container">
      <div className="container">
        <h2>ChatMe</h2>
      </div>
    </nav>
    <div className="container">
      <div className="eight columns messages">
        <div className="scrollView">
          {messageDivs}
        </div>
      </div>
    </div>
    <div className="four columns">
      <Input label={'Message'} value={newMessage} onChange={this.handleMessageChange} onKeyPress={this.handleKeyPress} />
      <Input label={'Name'} value={name} onChange={this.handleNameChange} />
    </div>
  </div>);
  }
});

export default App;