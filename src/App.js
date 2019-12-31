import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import Login from './pages/Login'
import Rejister from './pages/Rejister'
import Table from './components/Table'
import Card from './components/Card'
import  {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Route path="/main" component={Main} exact/>
      <Route path="/login" component={Login} exact />
      <Route path="/rejister" component = {Rejister}/>
      <Route path="/table" component = {Table}/>
      <Route path="/card" component = {Card}/>
    </Router>
  )
}

export default App;
