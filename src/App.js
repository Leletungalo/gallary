import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';

import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Images from "./components/Images";
import Rigister from './components/Rigister';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
            <Route exact path="/rigister">
              <Rigister  />
            </Route>
          <Route exact path="/images">
            <UploadForm />
            <Images />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
