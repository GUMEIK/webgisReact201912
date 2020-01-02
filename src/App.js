import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import Login from './pages/Login'
import Rejister from './pages/Rejister'
// import Table from './components/Table'
import Card from './components/Card'
import  {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Test from './components/Test'
// import AMap from './pages/AMap'
import Frame from './pages/Frame'
import Chat from './pages/Chat'
function App() {

  return (
    <Router>
      <Route path="/main" component={Main} exact/>
      <Route path="/login" component={Login} exact />
      <Route path="/rejister" component = {Rejister}/>
      {/* <Route path="/table" component = {Table}/> */}
      <Route path="/card" component = {Card} exact/>
      <Route path="/" component = {Test} exact/>
      <Route path="/frame" component={Frame} exact/>
    </Router>
  )
}

export default App;
