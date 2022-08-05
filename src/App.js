import React from "react";
import './styles/App.css';
import {Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <>
            <Navbar/>
            <AppRouter/>
        </>
    )
}

export default App;
