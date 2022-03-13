import React from "react";
import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import Market from "../Market/Market";
import Create from '../Create/Create';
import NavBar from '../../components/NavBar/NavBar';
// import Cards from '../../components/Cards/Cards';



export default function App() {
  const [user, setUser] = useState(getUser());
  return (
      <main className="App">
           <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Market />} />
              <Route path="/login" element={<AuthPage user={user} setUser={setUser} />} />
              { user? 
                <Route path="/create" element={<Create />} />
                :null
              }
            </Routes>
          </>
      </main>
  )
}
