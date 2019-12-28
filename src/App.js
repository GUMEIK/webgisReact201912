import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import Comment from './components/Table'
function App() {

  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <Comment/>
    </div>
  )
}

export default App;
