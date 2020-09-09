import React from 'react'
import './Login.css'
import { Link } from '@material-ui/core'

function Login() {

    const login = e => {
        e.preventDefault();
    }

    const register = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/">
            <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
            />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button onClick={login} type="submit" className="signin">Sign In</button>
                </form>
                <p>
                    {/* conditinons */}By continuing, you agree to Amazon's<a href="#"> Conditions</a> of Use and <a href="#">Privacy Notice</a>.
                </p>
                <button onClick={register} className="register">Create your Amazon Account</button>
            </div>
        </div>


    )
}

export default Login
