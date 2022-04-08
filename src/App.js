import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Welcome from './components/Welcome';
import { Outlet } from "react-router-dom";
import Search from './components/Search';
import "./styles/tailwind.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Home"
  },[])
  return (
    <>
      <Navbar />
      <Welcome />
      <Search />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
