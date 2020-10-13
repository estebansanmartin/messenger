import React, { useEffect, useState } from 'react';
import './estilos.sass';
import { IconButton, FormControl, Input, Avatar, Card, CardContent } from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import GoogleLogin from 'react-google-login'
import msn from './messenger.png'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  //const [username, setUserName] = useState('');

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  //**** useState = variable in REACTJS
  //**** useEffect = run code on a condition in REACTJS

  useEffect(() => {
    //*** const username = prompt('svrivi il tuo nome')
    //setUserName(prompt('scrivi il tuo nome'))
  }, []) //Condition

  useEffect(() => {
    //i documenti sono aggiornati subito
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [])

  const sendMessage = (event) => {
    //messagio inviato
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      name: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }
  const responseGoogle = response => {
    setName(response.profileObj.name);
    setUrl(response.profileObj.imageUrl);
  }
  return (
    <div className="App">
      <img className="image" src={msn} alt="logo" />
      <h1 className="title"> Clone Messenger </h1>
      {/* ---login google*/}
            <Card className="card">
                <CardContent className="card-content">
                    <Avatar className="avatar" src={url} alt={name} />
                    <h3 className="card-title">Benvenuto {name}</h3>
                    <GoogleLogin
                        clientId="240698097252-aoe3t7e9egtfiiain0q2053sge87b2ln.apps.googleusercontent.com"
                        buttonText="Login con Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </CardContent>
            </Card>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input card-title" placeholder="scrivi il tuo messaggio..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* messages themselves */}
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={name} message={message} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
