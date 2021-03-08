
import React from 'react';
import '../node_modules/bootstrap';
import '../node_modules/animate.css'
import Personal from './pages/personal';
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
                <Route path='/personal'><Personal /></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
