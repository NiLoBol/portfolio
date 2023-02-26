import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import LoginForm from "./Loginpage";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import Todostate from "./Todostate";
import XOgame from "./XOgame";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<Todostate />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/XOgame" element={<XOgame />} />
        <Route path="/portfolio" element={<Portfolio
        
        />} />
      </Routes>
  );
}
