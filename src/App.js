import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Login from './components/containers/Login'
import Dashboard from './components/containers/Dashboard'
import ProtectedRoute from './routers/protected.route'

function App() {
    return (

        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login} />
                    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </Router>

    );
}

export default App;
