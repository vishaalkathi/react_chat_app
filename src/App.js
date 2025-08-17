import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';
import Cookie from 'universal-cookie';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.js';

const cookies = new Cookie();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove('auth-token');
    setIsAuth(false);
    setRoom(null);
  }

  return <>
     {room ? (
        <Chat room={room}/>
      ) : (
        <div className="room">
          <label> Enter Room Name: </label>
          <input ref = {roomInputRef}/>
          <button onClick={() => setRoom(roomInputRef.current.value)}> Join Room </button>
        </div>
        )}

      <button className='sign-out'
        onClick={() => {
          signUserOut();
        }}
      >Sign Out</button>
      </>
}

export default App;
