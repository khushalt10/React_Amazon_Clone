import React from 'react'
import './Login.css'
import { Link } from '@material-ui/core'

function Login() {
    return (
        <div className="login">
            <Link
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
            />
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button>Sign In</button>
                </form>
                <p>
                    {/* conditinons */}
                </p>
                <button>Create your Amazon Account</button>
            </div>
        </div>


    )
}

export default Login
