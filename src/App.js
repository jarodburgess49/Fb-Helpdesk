import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Main';
function App() {
  return (
    <div className="App">
  
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard}/>
      
    </div>
  );
}

export default App;
