import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Login from './components/containers/Login'
import Dashboard from './components/containers/Dashboard'
import ProtectedRoute from './routers/protected.route'
import NotFound from './components/containers/NotFound'

function App() {
    return (

        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login} />
                    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                    <Route path="*" component={ NotFound } /> 
                </Switch>
            </div>
        </Router>

    );
}

export default App;
