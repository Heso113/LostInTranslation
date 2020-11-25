import React, { useEffect, useState } from 'react';
import TranslationForm from '../form/TranslationForm';
import { setStorage, getStorage } from '../utils/localStorage';

const Dashboard = () => {

    const [ latestTranslation, setLatestTranslation ] = useState({sentence: '', arr: []});

    useEffect(() => {
    }, [latestTranslation]);

    const handleTranslateButtonClicked = (data) => {
        //Update translation history in localstorage
        let translationHistory = getStorage('userHistory');
        translationHistory.push(data);
        if (translationHistory.length > 10) {
            translationHistory = translationHistory.reverse();
            translationHistory.pop();
            translationHistory = translationHistory.reverse();
        }
        //Save translation history in local storage and set latest translation
        setStorage('userHistory', translationHistory);
        setLatestTranslation(data);
    }

    return (
        <div>
            <h1>
                Welcome to the Dashboard!
            </h1>
            <TranslationForm translateButtonClicked={ handleTranslateButtonClicked } />
            <div>
                <h3>Sentence: { latestTranslation.sentence }</h3>
                <span>
                    {latestTranslation.arr.map((sign, index) => 
                        <img src={sign.sprite} alt="this is a sign" key={index}></img> 
                    )}
                </span>
                <h3>Translation</h3>
            </div>
        </div> 
    )
}

export default Dashboard;