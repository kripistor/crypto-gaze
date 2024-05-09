import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="Home-page">
            <div className="sidebar">
                <h1 className="project-title">CryptoGaze</h1>
                <nav className="menu">
                </nav>
                <div className="profile-section">
                    <div className="profile-info">
                        <img className="profile-icon" src="" alt="Profile Icon"/>
                        <p className="username">Username</p>
                    </div>
                    <button className="logout-button">Logout</button>
                </div>
            </div>
            <div className="top-bar">
                <input type="search" className="search-field" placeholder="Search..."/>
                <div className="notifications">
                </div>
                <div className="messages">
                </div>
            </div>
            <div className="content">
            </div>
        </div>
    );
}

export default Home;