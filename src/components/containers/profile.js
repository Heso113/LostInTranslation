import React, { useState } from 'react';
import { getStorage } from '../utils/localStorage';


const Profile = () => { 
    
    const [ history, setHistory ] = useState([]);  
    
    const onBackClicked = e => { 
        console.log('Clicked back!');
        setHistory(getStorage('userHistory'));
    }

    return (
        <div>
            Profile Username
            <div>
                <button type="button" onClick={ onBackClicked }>Back</button>
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