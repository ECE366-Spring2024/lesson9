import "./App.css";
import { Link, useNavigate  } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import useUser from "./hooks/useUser";
import {getAuth, signOut} from 'firebase/auth';

function links(text) {
    return (
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/buy">Buy</Link>
        </nav>
        <h1>{text}</h1>
      </div>
    );

}

function Home() {
  const [data, setData] = useState(null);
  const {user, isLoading} = useUser();
    useEffect(() => {

    const loadUsers = async () => {
      try {
        const ip = window.location.host;
        console.log(ip);

        const token = user && await user.getIdToken();
        console.log(token);
        const headers = token ? {Authorization: `Bearer ${token}`, "Access-Control-Allow-Origin": "*"} : {};
        const response = await axios.get(`http://` + ip + `:8080/api/getAllPlayers`, {headers});
        setData(response.data)
        /*
        const response = await axios.get(`http://localhost:8080/api/getAllPlayers`);
        setData(response.data)
        */
      } catch (error) {
        setData("UNAUTHORIZED" + error.message);
      }
    }
    loadUsers();
  }, [isLoading, user]);
  const navigate = useNavigate();
    return (
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/buy">Buy</Link>
            {user
              ? <button onClick={() => {
                  signOut(getAuth());
              }}>Log Out</button>
              : <button onClick={() => {
                  navigate('/login')
              }}>Log In</button>
            }
        </nav>
        <h1>"My Website"</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      }
      </div>
    );
}

export function About() {
  return links("About Us");
}

export function Contact() {
  return links("Contact Us");
}

export function Buy() {
  return links("Give me all yo money");
}

export function App() {
    return <Home />;
}