import logo from './logo.svg';
import './App.css';
import Dashboard from './components/containers/Dashboard';
import Login from './components/containers/Login';
import Register from './components/containers/Register';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Login />
      <Register />
    </div>
  );
}

export default App;
