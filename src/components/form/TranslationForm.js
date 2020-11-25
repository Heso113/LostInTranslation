import React, { useState } from 'react';

const TranslationForm = props => {

    const [ sentence, setSentence ] = useState('');

    const onTranslateClicked = e => {
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
        props.translateButtonClicked(arr);
    };
    
    const onSentenceChanged = ev => {
        setSentence(ev.target.value.toLowerCase());
    }

    return (
        <form>
            <div>
                <label>Sentence</label>
                <input type="text" placeholder="Enter a sentence to translate..." onChange={ onSentenceChanged }></input>
            </div>
            <div>
                <button type="button" onClick={ onTranslateClicked }>Translate</button>
            </div>
        </form>
    );
}

export default TranslationForm;