import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, About, Contact, Buy } from "./App";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkXWm5ly-ICaFdnrH_ows4XanCcnPRjVY",
  authDomain: "rps8-cfe33.firebaseapp.com",
  projectId: "rps8-cfe33",
  storageBucket: "rps8-cfe33.appspot.com",
  messagingSenderId: "47581288873",
  appId: "1:47581288873:web:5ffb1b0f81985989238cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route
                path="/contact"
                element={<Contact />}
            />
            <Route path="/buy" element={<Buy />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
        </Routes>
    </BrowserRouter>,
);