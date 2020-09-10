import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './Firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
          .then((auth) => {
            history.push("/");
          }).catch(err => alert(err.message));
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            }).catch(err => alert(err.message));
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
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
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
