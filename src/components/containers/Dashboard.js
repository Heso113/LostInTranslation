import React, { useEffect, useState } from 'react';
import TranslationForm from '../form/TranslationForm';

const Dashboard = () => {

    const [ history, setHistory ] = useState([]);    

    useEffect(() => {
        console.log('Sweet!');
    }, [history]);

    const handleTranslateButtonClicked = (sentence) => {
        let searchHistory = history;
        searchHistory.push(sentence);
        if (searchHistory.length > 10) {
            searchHistory = searchHistory.reverse();
            searchHistory.pop();
            searchHistory = searchHistory.reverse();
        }
        setHistory(searchHistory);
        // console.log(history);
    }

    return (
        <div>
            <h1>
                Welcome to the Dashboard!
            </h1>
            <TranslationForm translateButtonClicked={ handleTranslateButtonClicked } />
            <div>
                {history.map((s, index) => 
                    <div key={index}>
                        <span>
                            {s.map((sign, index) => 
                                <img src={sign.sprite} alt="this is a sign" key={index}></img> 
                            )}
                        </span>
                    </div>                
                )}
            </div>
        </div> 
    )
}

export default Dashboard;