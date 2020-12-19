import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel,IconButton } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase.js";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMesseges] = useState([]);
  const [username, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMesseges(snapshot.docs.map(doc => ({id : doc.id, message : doc.data()})))
    })
  }, [])


  useEffect(() => {
    setUserName(prompt('Please enter your Name'))
  }, [])


  function sendMessege(e) {
    e.preventDefault();
    db.collection('messages').add({
      message : input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  return (
    <div className="App">
      <img  alt="messenger" src='https://www.klm.com/travel/gb_en/images/Messenger-Logo_tcm638-763765.png' />
      <h1>Facebook Messenger App</h1>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app_input"
            placeholder="Enter message here..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton 
            className="app__iconButton"
            variant="contained"
            color="primary"
            disabled={!input}
            type="submit"
            onClick={sendMessege}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id,message}) => (
          <Message key={id} username={username} message={message}/>
        ))}
      </FlipMove>

      
    </div>
  );
}

export default App;
