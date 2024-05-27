import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';
import Settings from "./Settings.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;