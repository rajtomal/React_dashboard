import React from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const Navigate = useNavigate();
    const logIn = (e) => {
        e.preventDefault();
        Navigate('/')
        console.log('object');
    }
    return (
        <>
            <section className="login-section">
                <div className="form-container">
                    <p className="title">Login</p>
                    <form onSubmit={logIn} className="form">
                        <div className="input-group">
                            <label>Username</label>
                            <input type="text" name="username" id="username" placeholder="" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" name="password" id="password" placeholder="" />
                            <div className="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>
                        <button type="submit" className="sign">Sign in</button>
                    </form>
                    <div className="social-message">
                        <div className="line"></div>
                    </div>
                    <p className="signup">Don't have an account?
                        <a rel="noopener noreferrer" href="#" className="">Sign up</a>
                    </p>
                </div>
            </section>
        </>
    )
}

export default LogIn