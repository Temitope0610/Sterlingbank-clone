import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// pages
import Home from './pages/home';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path ="/" exact ><Home/></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
