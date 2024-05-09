import React, { useState } from 'react';
import './Welcome.scss';

function Welcome() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [activeButton, setActiveButton] = useState('signIn');

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    const switchButton = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="welcome-page">
            <div className="auth-section">
                <h2>Вход / Регистрация</h2>
                <form onSubmit={submitForm} className="login-form">
                    <div className="input-field">
                        <img src="/login.svg" alt="Email Icon" className="input-icon"/>
                        <input type="email" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="E-mail or Login" required className="login-box"/>
                    </div>
                    <div className="input-field">
                        <img src="/password.svg" alt="Password Icon" className="input-icon"/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="password-box"/>
                        <img src="/eye.svg" alt="Show Password Icon" className="show-password-icon" onClick={() => {}}/>
                    </div>
                    <div className="buttons-container">
                        <button type="button" className={activeButton === 'signIn' ? 'active-button' : 'inactive-button'} onClick={() => switchButton('signIn')}>Войти</button>
                        <button type="button" className={activeButton === 'signUp' ? 'active-button' : 'inactive-button'} onClick={() => switchButton('signUp')}>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
            <div className="project-section">
                <h1>CryptoGaze</h1>
                <p>Краткое описание проекта в одно предложение</p>
            </div>
        </div>
    );
}

export default Welcome;
