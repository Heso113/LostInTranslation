import React, { useEffect, useState } from 'react';
import LoginForm from '../form/LoginForm'
import auth from '../../utils/auth'
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const hadleLoginComplete = (user) => {
        console.log('Triggered from LoginForm', user);

        if (auth.isAuthenticated()) {
            auth.login(user, () => {
                props.history.push("/dashboard");
            });
        }
    }

    return (
        <div>
            <h1>Welcome to the Login </h1>
            <LoginForm complete={hadleLoginComplete} />
        </div>
    );

};
export default Login;