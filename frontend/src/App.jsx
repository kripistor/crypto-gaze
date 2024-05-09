import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;