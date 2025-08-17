import { useEffect, useState } from 'react';
import '../styles/Chat.css';
import { addDoc, 
        collection, 
        serverTimestamp, 
        onSnapshot, 
        query, 
        where, 
        orderBy
    } from 'firebase/firestore';
import { auth, db } from '../firebase-config.js';

export const Chat = (props) => {
    const { room } = props;
    const [newMsg, setNewMsg] = useState("");
    const [messages, setMessages] = useState([]);

    const chatsRef = collection(db, "Chats");

    useEffect(() => {
        const queryChats = query(chatsRef, where("room", "==", room), orderBy("timestamp", "asc"));
        const unsubscribe = onSnapshot(queryChats, (snapshot) => {
            const messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMsg == "") {
            return;
        }

        await addDoc(chatsRef, {
            message: newMsg,
            timestamp: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room
        });

        setNewMsg("");
    };

  return (
    <div className="react-chat-app">
        <div className="chat-header">
            <h1>Room: {room}</h1>
        </div>
        <div className="chat-messages">
            {messages.map((message) => (
                <div key={message.id} className="chat-message">
                    <span className="chat-user">{message.user}</span>
                    <span className="chat-timestamp">
                        {new Date(message.timestamp?.toDate()).toLocaleTimeString()}
                    </span>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
            <input 
                className = "chat-input"
                type="text" 
                placeholder="Type your message here..." 
                onChange={(e) => setNewMsg(e.target.value)}
                value = {newMsg}
            />
            <button type="submit" className="chat-button">
                Send
            </button>
        </form>
    </div>
  );
}