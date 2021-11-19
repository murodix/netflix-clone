import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('/profiles');
    }

    return (
        <div className="login">
            <div className="login__gradient">
                <Navbar displaySignIn={false} />
                <div className="login__container">
                    <div className="login__content">
                        <h1 className="login__title">Sign In</h1>
                        <form className="login__form">
                            <input type="email" required placeholder="Email address"></input>
                            <input type="password" required placeholder="Password" />
                            <button type="submit" className="login__signIn" onClick={goToProfile} >Sign In</button>
                        </form>
                        <p className="login__signUp">New to netflix? <a href="/" className="login__signUp-link"> Sign up now</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
