import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';

//Import Auth For   Validation 

function Login() {

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <h2 className="login__logoTitle">Login-To</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'  />

                    <h5>Password</h5>
                    <input type='password'  />

                    <button type='submit' className='login__signInButton' >Sign In</button>
                </form>

                <p>
                  Login & Connect With-US
                </p>

            </div>
        </div>
    )
}

export default Login;