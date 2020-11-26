import React, { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../utils/localStorage';


const Profile = props => { 
    
    const [ history, setHistory ] = useState([]);  

    
    useEffect(() => {
        setHistory(getStorage('userHistory'));
    }, [])

    const onClearHistoryClicked = e => {
        setHistory([]);
        setStorage('userHistory', []);
        console.log(getStorage('userHistory'));
    }

    const onTranslatorClicked = e => { 
        props.translatorButtonClicked();
    }

    return (
        <div>
            Profile Username
            <div>
                <button type="button" onClick={ onClearHistoryClicked }>Clear History</button>
                <button type="button" onClick={ onTranslatorClicked }>Translator</button>
            </div>
            <div>
                <h1>Search History</h1>
                <div>
                    {history.map((s, index) => 
                        <div key={index}>
                            <h3>Sentence: { s.sentence }</h3>
                            <span>
                                {s.arr.map((sign, index) => 
                                    <img src={sign.sprite} alt="this is a sign" key={index}></img> 
                                )}
                            </span>
                            <h3>Translation</h3>
                        </div>         
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile;