import React from 'react';
import auth from '../../utils/auth'

const Dashboard = (props) => {

    const hadleLogOut =()=> {

        if(auth.isAuthenticated){
            auth.logout(()=> {
                props.history.push("/login");
            });
        }
    }

    return (
        <div>
            <h1>
                Welcome to the Dashboard!
            </h1>
            <button onClick={hadleLogOut}>Logout</button>
        </div>
    )
}
export default Dashboard;