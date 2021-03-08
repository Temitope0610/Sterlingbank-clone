
import React from 'react';
import Home from './Component/home'
// import './App.css';
import '../node_modules/bootstrap';
import Icon from './Component/icon'
import '../node_modules/animate.css'
import Personal from './Component/personal';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// pages
import Home from './pages/home';


function App() {
  return (
    <div>

       {/* <Home />
       <Icon />
       <Personal /> */}
       {/* <Router>
         <Switch>
           <Route path='/' exact><Home /></Route>
           <Route path='/personal'><Personal /></Route>
         </Switch>
       </Router> */}
        <Router>
            <Switch>
                <Route path ="/" exact ><Home/></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
