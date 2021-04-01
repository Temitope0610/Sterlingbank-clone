import React from 'react';
// pages
import Home from './pages/home';
import './App.css';
// import '../node_modules/bootstrap';
// import '../node_modules/animate.css'
import Personal from './pages/personal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PersonalNavbar from './components/personal-navbar'
import Footer from './components/footer'


function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path ="/" exact > <Home/></Route>
                <Route path='/personal'> <PersonalNavbar/> <Personal/> <Footer/></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
