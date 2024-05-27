import React, {useEffect, useState} from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';
import './Home.scss';
import overviewIcon from '/OverviewIcon.svg';
import walletsIcon from '/WalletsIcon.svg';
import transictionsIcon from '/TransictionsIcon.svg';
import exchangeIcon from '/ExchangeIcon.svg';
import marketIcon from '/MarketIcon.svg';
import notificationsIcon from '/NotificationsIcon.svg';
import messagesIcon from '/MessagesIcon.svg';
import logoutIcon from '/LogoutIcon.svg';
import SettingsIcon from '/SettingsIcon.svg';
import Overview from "./components/Overview.jsx";
import Wallets from "./components/Wallets.jsx";
import Transictions from "./components/Transictions.jsx";
import Exchange from "./components/Exchange.jsx";
import Market from "./components/Market.jsx";


function Home() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [messagesCount, setMessagesCount] = useState(0);
    const [notificationsCount, setNotificationsCount] = useState(1);
    const navigate = useNavigate();

    const overview = new URLSearchParams(location.search).has('Overview');
    const wallets = new URLSearchParams(location.search).has('Wallets');
    const transictions = new URLSearchParams(location.search).has('Transictions');
    const exchange = new URLSearchParams(location.search).has('Exchange');
    const market = new URLSearchParams(location.search).has('Market');

    useEffect(() => {
        setActiveLink(location.pathname + location.search);
    }, [location.pathname, location.search]);

    return (
        <div className="Home-page">
            <div className="left-side">
                <div className="sidebar">
                    <h1 className="project-title">CryptoGaze</h1>
                    <nav className="menu">
                        <Link to="/home?Overview"
                              className={`menu-link ${activeLink === "/home?Overview" ? "active" : ""}`}>
                            <img src={overviewIcon} alt="Overview Icon"/>
                            Overview
                        </Link>
                        <Link to="/home?Wallets"
                              className={`menu-link ${activeLink === "/home?Wallets" ? "active" : ""}`}>
                            <img src={walletsIcon} alt="Wallets Icon"/>
                            Wallets
                        </Link>
                        <Link to="/home?Transictions"
                              className={`menu-link ${activeLink === "/home?Transictions" ? "active" : ""}`}>
                            <img src={transictionsIcon} alt="Transictions Icon"/>
                            Transictions
                        </Link>
                        <Link to="/home?Exchange"
                              className={`menu-link ${activeLink === "/home?Exchange" ? "active" : ""}`}>
                            <img src={exchangeIcon} alt="Exchange Icon"/>
                            Exchange
                        </Link>
                        <Link to="/home?Market"
                              className={`menu-link ${activeLink === "/home?Market" ? "active" : ""}`}>
                            <img src={marketIcon} alt="Market Icon"/>
                            Market
                        </Link>
                    </nav>
                    <div className="profile-section">
                        <div className="profile-info">
                            <img className="profile-icon" src="" alt="Profile Icon"/>
                            <p className="username">Username</p>
                            <button className="settings-button">
                                <Link to="/Settings">
                                    <img src={SettingsIcon} alt="Settings Icon"/>
                                </Link>
                            </button>
                        </div>
                        <Link to={'/'}>
                            <button className="logout-button">
                                <img src={logoutIcon} alt="Logout Icon"/>
                                Log Out
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="top-bar">
                    <input type="search" className="search-field" placeholder="Search..."/>
                    <div className="notifications" onClick={() => setNotificationsCount(notificationsCount + 1)}>
                        <img src={notificationsIcon} alt="Notifications Icon"/>
                        {notificationsCount > 0 && <div className="notifications-counter">{notificationsCount}</div>}
                    </div>
                    <div className="messages">
                        <img src={messagesIcon} alt="Messages Icon"/>
                        {messagesCount > 0 && <div className="messages-counter">{messagesCount}</div>}
                    </div>
                </div>
                <div className="content">
                    {overview && <Overview/>}
                    {wallets && <Wallets/>}
                    {transictions && <Transictions/>}
                    {exchange && <Exchange/>}
                    {market && <Market/>}
                </div>
            </div>
        </div>
    );
}

export default Home;