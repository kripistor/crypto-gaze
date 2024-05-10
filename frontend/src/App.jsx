import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';
import Overview from './components/Overview';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/home/*" element={<Home/>}>
                        <Route path="Overview" element={<Overview/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;