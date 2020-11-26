import React, { useState } from 'react'

const LoginForm = props => {
    const [user, setUsername] = useState({});

    const onLoginClicked = ev => {
        props.complete(user);
    };

    const onUsernameChanged = ev => setUsername(ev.target.value.trim());

    return (
        <form>
            <div>
                <label>Username: </label>
                <input type="text" placeholder="Enter a username" onChange={onUsernameChanged} />
            </div>

            <div>
                <button type="button" onClick={onLoginClicked}>Login</button>
            </div>

        </form>
    )
};

export default LoginForm;