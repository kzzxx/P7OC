import React from "react";
import Banner from './components/Banner'
import Post from './views/Post';
import SignUp from './views/SignUp';
import Login from './views/Login';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

const App = () => (
    <Router>
        <Banner />
        <div id="container">
            <Routes>
                <Route path="/" element={<Post />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </div>
    </Router>
);

export default App