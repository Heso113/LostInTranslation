import React, { useState } from 'react'

const LoginForm = props => {
    const [user, setUsername] = useState({});
    const [ validInput, setValidInput ] = useState(false);
    const [ invalidInputMessage, setInvalidInputMessage ] = useState('Please enter a username with atleast 3 characters.');

    const onLoginClicked = ev => {
        props.complete(user);
    };

    const onUsernameChanged = ev => {        
        let currentInput = ev.target.value;
        setUsername(currentInput);
        if (currentInput.length < 3) {
            setValidInput(false);
            setInvalidInputMessage('Please enter a username with atleast 3 characters.');
        } else if (currentInput.length > 15) {
            setValidInput(false);
            setInvalidInputMessage('Username cannot exceed 15 characters in length.');
        } else {
            setValidInput(true);
            for(let i = 0; i < currentInput.length; i++) {
                let currentChar = currentInput[i];
                if (!((currentChar >= 'a' && currentChar <= 'z') || (currentChar >= 'A' && currentChar <= 'Z' ))) {
                    setValidInput(false);
                    setInvalidInputMessage('Error: username may only contain letters.');
                }
            }
        }
    }

    return (
        <form>
            <div>
                <label>Username: </label>
                <input type="text" placeholder="Enter a username" onChange={onUsernameChanged} />
            </div>

            <div>
                <button disabled={!validInput} type="button" onClick={onLoginClicked}>Login</button>
                { !validInput ? <p>{ invalidInputMessage }</p>: null}
            </div>

        </form>
    )
};

export default LoginForm;