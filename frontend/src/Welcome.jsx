import React, {useEffect, useState} from 'react';
import './Welcome.scss';
import eyeOpen from '/eye-open.svg';
import eyeClose from '/eye.svg';
import {Link, useNavigate} from "react-router-dom";

function Welcome() {
    const [username, setUsername] = useState('')
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [activeButton, setActiveButton] = useState('signIn');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const submitFormReg = (e) => {
        const userData = {
            username: username,
            login: login,
            password: password
        };

        e.preventDefault();
        if (activeButton === 'signUp' && password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }


        //implement registration
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    const switchButton = (button) => {
        setActiveButton(button);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword); // новая функция
    };

    useEffect(() => {
        async function proverka() {
            let refreshToken = (await getJwt()).refresh
            if (refreshToken) {
                navigate('/home');
            }
        }

        proverka()
    }, [navigate]);

    return (
        <div className="welcome-page">
            <div className="auth-section">
                <h2>Вход / Регистрация</h2>
                <form onSubmit={submitFormReg} className="login-form">
                    {activeButton === 'signUp' && (
                        <div className="input-field">
                            <img src="/login.svg" alt="Email Icon" className="input-icon"/>
                            <input type="email" value={username} onChange={(e) => setUsername(e.target.value)}
                                   placeholder="Username" required className="login-box"/>
                        </div>
                    )}
                    <div className="input-field">
                        <img src="/login.svg" alt="Email Icon" className="input-icon"/>
                        <input type="email" value={login} onChange={(e) => setLogin(e.target.value)}
                               placeholder="Login" required className="login-box"/>
                    </div>
                    <div className="input-field">
                        <img src="/password.svg" alt="Password Icon" className="input-icon"/>
                        <input type={showPassword ? "text" : "password"} value={password}
                               onChange={(e) => setPassword(e.target.value)} placeholder="Password" required
                               className="password-box"/>
                        <img src={showPassword ? eyeOpen : eyeClose} alt="Show Password Icon"
                             className="show-password-icon" onClick={toggleShowPassword}/>
                    </div>
                    {activeButton === 'signUp' && (
                        <div className="input-field">
                            <img src="/password.svg" alt="Confirm Password Icon" className="input-icon"/>
                            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword}
                                   onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"
                                   required
                                   className="password-box"/>
                            <img src={showConfirmPassword ? eyeOpen : eyeClose} alt="Show Confirm Password Icon"
                                 className="show-password-icon" onClick={toggleShowConfirmPassword}/>
                        </div>
                    )}
                    <div className="buttons-container">
                        {activeButton !== 'signUp' && (
                            <>
                                <Link to={'/home'}>
                                    <button type="button"
                                            className={activeButton === 'signIn' ? 'active-button' : 'inactive-button'}
                                            //onClick={submitForm}
                                        >
                                        Войти
                                    </button>
                                </Link>

                                <button type="button"
                                        className={activeButton === 'signUp' ? 'active-button' : 'inactive-button'}
                                        onClick={() => switchButton('signUp')}>Зарегистрироваться
                                </button>
                            </>
                        )}

                        {activeButton === 'signUp' && (
                            <>
                                <button type="button"
                                        className={activeButton === 'signIn' ? 'active-button' : 'inactive-button'}
                                        onClick={() => switchButton('signIn')}>Войти
                                </button>
                                <button type="button"
                                        className={activeButton === 'signUp' ? 'active-button' : 'inactive-button'}
                                        onClick={submitFormReg}>Подтвердить
                                </button>
                            </>
                        )}
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