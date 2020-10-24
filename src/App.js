import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';

import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Images from "./components/Images";
import Rigister from './components/Rigister';
import Login from './components/Login';
import Model from './components/Model';

function App() {
  const [src, setSrc] = useState(null);
  
  const openModel = (srcName) =>{
    console.log(srcName);
    setSrc(srcName)
  } 

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <UploadForm />
            <Images />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
            <Route exact path="/rigister">
              <Rigister  />
            </Route>
          <Route exact path="/images">
            <UploadForm />
            <Images openModel={openModel}/>
            {src &&  <Model src={src} setSrc={setSrc} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
