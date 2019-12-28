import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
//   var map = new window.AMap.Map('root', {
//     center: [116.397428, 39.90923],
//     layers: [//使用多个图层
//         new window.AMap.TileLayer.Satellite(),
//         new window.AMap.TileLayer.RoadNet()
//     ],
//     zooms: [4,18],//设置地图级别范围
//     zoom: 13
// });
  // let webmap = new window.WebMap({
  //   portalItem: {
  //     id: "6c5d657f1cb04a5eb78a450e3c699c2a"
  //   }
  // });

  // let view = new window.MapView({
  //   container: "root",
  //   map: webmap
  // });

  // view.when(function() {
  //   view.popup.autoOpenEnabled = false; //disable popups

  //   // Create the Editor
  //   let editor = new window.Editor({
  //     view: view
  //   });

  //   // Add widget to top-right of the view
  //   view.ui.add(editor, "top-right");
  // })
  if(window.WebMap && window.MapView && window.Editor){
    // let webmap = new window.WebMap({
    //   portalItem: {
    //     id: "6c5d657f1cb04a5eb78a450e3c699c2a"
    //   }
    // });
  
    // let view = new window.MapView({
    //   container: "root",
    //   map: webmap
    // });
  
    // view.when(function() {
    //   view.popup.autoOpenEnabled = false; //disable popups
  
    //   // Create the Editor
    //   let editor = new window.Editor({
    //     view: view
    //   });
  
    //   // Add widget to top-right of the view
    //   view.ui.add(editor, "top-right");
    // });
  }
  return (
    <div className="App" id="tttt" style={{width:500,height:500}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
