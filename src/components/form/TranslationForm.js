import React, { useState } from 'react';

const TranslationForm = props => {

    const [ sentence, setSentence ] = useState('');
    const [ validInput, setValidInput ] = useState(false);
    const [ invalidInputMessage, setInvalidInputMessage ] = useState('Sentence must contain between 1 to 40 characters.');

    const onTranslateClicked = e => {
        if (sentence.length > 0) {
            const arr = [];
            for (let i = 0; i < sentence.length; i++) {
                let newObject = {character: '', sprite: ''};
                newObject.character = sentence[i];
                if (sentence[i] !== ' ') {
                    newObject.sprite = '/resources/signs/' + sentence[i] + '.png';
                } else {
                    newObject.sprite = '/resources/signs/space.png';
                }
                arr.push(newObject);
            }
            props.translateButtonClicked({sentence: sentence, arr: arr});
        } 
    };
    
    const onSentenceChanged = ev => {
        let currentSentence = ev.target.value.toLowerCase();
        setSentence(currentSentence);
        if (currentSentence.length < 1) {
            setValidInput(false);
            setInvalidInputMessage('Error: Sentence must contain at least 1 character.');
        } else if (currentSentence.length > 40) {
            setValidInput(false);
            setInvalidInputMessage('Error: Sentence can contain a maximum off 40 characters.');
        } else {
            setValidInput(true);
        }
    }

    return (
        <form>
            <div>
                <label>Sentence</label>
                <input type="text" placeholder="Enter a sentence to translate..." onChange={ onSentenceChanged }></input>
                <button disabled={!validInput} type="button" onClick={ onTranslateClicked }>Translate</button>
                { !validInput ? <p>{ invalidInputMessage }</p>: null}
            </div>
        </form>
    );
}

export default TranslationForm;