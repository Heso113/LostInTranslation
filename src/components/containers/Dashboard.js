import React, { useEffect, useState } from 'react';
import Profile from './profile';
import Translator from './Translator';

const Dashboard = () => {

    const [ showTranslator, setShowTranslator ] = useState(true);  
    const [ showProfile, setShowProfile ] = useState(false);  

    useEffect(() => {
        setShowProfile(false);
        setShowTranslator(true);
    }, []);

    const renderProfile = () => {
        setShowTranslator(false);
        setShowProfile(true);
    }

    const renderTranslator = () => {
        setShowProfile(false);
        setShowTranslator(true);
    }

    return (
        <div>
            <h1>
                Welcome to the Dashboard!
            </h1>
            <div>
                { showTranslator ? <Translator profileButtonClicked={ renderProfile } />: null}
                { showProfile ? <Profile translatorButtonClicked={ renderTranslator } />: null }
            </div>
        </div> 
    )
}

export default Dashboard;