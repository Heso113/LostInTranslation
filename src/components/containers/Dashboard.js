import React, { useEffect, useState } from 'react';
import Profile from './profile';
import Translator from './Translator';
import auth from '../../utils/auth'

const Dashboard = (props) => {

    const [ showTranslator, setShowTranslator ] = useState(true);  
    const [ showProfile, setShowProfile ] = useState(false);  

    const hadleLogOut =()=> {

        if(auth.isAuthenticated){
            auth.logout(()=> {
                props.history.push("/login");
            });
        }
    }

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
                <button onClick={hadleLogOut}>Logout</button>
            </div>
        </div> 
    )
}
export default Dashboard;