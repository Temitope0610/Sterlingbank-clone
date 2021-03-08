import React from 'react';
import './App.css';
import '../node_modules/bootstrap';
import '../node_modules/animate.css'
import Home from './pages/home'
import Personal from './pages/personal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route path='/' exact><Home /></Route>
           <Route path='/personal'><Personal /></Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
