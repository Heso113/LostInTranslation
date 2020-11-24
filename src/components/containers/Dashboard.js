import React, { useState } from 'react';
import TranslationForm from '../form/TranslationForm';

const Dashboard = () => {

    const [ message, setMessage ] = useState([]);
    
    const handleTranslateButtonClicked = (sentence) => {
        setMessage(sentence);
    }

    return (
        <div>
            <h1>
                Welcome to the Dashboard!
            </h1>
            <TranslationForm translateButtonClicked={ handleTranslateButtonClicked } />
            <div>
                <span>
                    {message.map((sign, index) => 
                        <img src={sign} alt="this is a sign" key={index}></img> 
                    )}
                </span>
            </div>
        </div> 
    )
}

export default Dashboard;