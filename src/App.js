import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import Comment from './components/Table'
import Login from './pages/Login'
import  {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Route path="/main" component={Main} exact/>
      <Redirect from="/" to="/login" />
      <Route path="/login" component={Login} exact />
    </Router>
  )
}

export default App;
