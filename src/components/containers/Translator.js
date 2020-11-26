import React, { useEffect, useState } from 'react';
import TranslationForm from '../form/TranslationForm';
import { getStorage, setStorage } from '../utils/localStorage';

const Translator = props => {

    const [ latestTranslation, setLatestTranslation ] = useState({sentence: '', arr: []});

    useEffect(() => {
    }, [latestTranslation]);

    const onProfileButtonClicked = e => {
        props.profileButtonClicked();
    }

    const handleTranslateButtonClicked = (data) => {
        //Update translation history in localstorage
        let translationHistory = getStorage('userHistory');
        if (translationHistory === false) {
            translationHistory = [];
        }
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
            <button type="button" onClick={ onProfileButtonClicked }>Profile</button>
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
    );
}

export default Translator;