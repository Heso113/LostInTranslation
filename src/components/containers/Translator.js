import React, { useEffect, useState } from 'react';
import TranslationForm from '../form/TranslationForm';
import { getStorage, setStorage } from '../utils/localStorage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';

const Translator = props => {

    const [latestTranslation, setLatestTranslation] = useState({ sentence: '', arr: [] });

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
        <>
            <Button type="button" onClick={onProfileButtonClicked}>Profile</Button>
            <TranslationForm translateButtonClicked={handleTranslateButtonClicked} />

            <Card>
                <Card.Header>{latestTranslation.sentence}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <span>
                            {latestTranslation.arr.map((sign, index) =>
                                <img src={sign.sprite} alt="this is a sign" key={index}></img>
                            )}
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Translator;