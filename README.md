# Simple React Chat Application

This is a simple, real-time chat application built with React, Firebase Authentication, and Firestore. It allows users to sign in, join specific chat rooms, send messages, and see them appear in real-time. The application provides a seamless and responsive user experience.

# Features

**Google Authentication**: Users can securely sign in and out using their Google account.

**Dynamic Chat Rooms**: Users can create and join chat rooms by typing in a room name.

**Real-time Messaging**: Messages are sent and received instantly within a specific room, powered by Firestore's real-time database capabilities.

**Responsive Design**: The application is designed to be usable on both desktop and mobile devices.

# Technologies Used

**React**: A JavaScript library for building user interfaces.

**Firebase Authentication**: Used for managing user sign-in and sign-out.

**Firebase Firestore**: A NoSQL cloud database used to store and sync chat messages in real time.

**CSS**: For styling the application and ensuring a clean user interface.

# Installation
To get a copy of this project up and running on your local machine, follow these steps.

# Prerequisites

* Node.js (LTS version recommended)

* A Firebase project with Firestore and Authentication enabled.

# Steps
**Clone the repository**:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


**Install dependencies**:

npm install


**Set up Firebase configuration**:

* In your Firebase project console, navigate to Project Settings.

* Under "Your apps," select or create a new web app.

* Copy the Firebase configuration object.

* Create a .env file in the root of your project and add your Firebase configuration as environment variables:

REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID


**Run the application**:

npm start


The application will now be running on http://localhost:3000.

# Usage
**Sign In**: Click the "Sign in with Google" button to authenticate.

**Choose a Room**: Enter a desired chat room name in the input field and submit it to join that room.

**Send Messages**: Once inside a chat room, type your message into the input field and press Enter or click the send button. Your message will be instantly visible to all other users in that room.

**Sign Out**: Use the sign-out button to log out of the application and return to the sign-in screen.

# License
This project is licensed under the MIT License.
