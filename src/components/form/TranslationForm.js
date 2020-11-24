import React, { useState } from 'react';

const TranslationForm = props => {

    const [ sentence, setSentence ] = useState('');

    const onTranslateClicked = e => {
        const arr = [];
        for (let i = 0; i < sentence.length; i++) {
            if (sentence[i] !== ' ') {
                arr.push('/resources/signs/' + sentence[i] + '.png');
            } else {
                arr.push('/resources/signs/space.png');
            }
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