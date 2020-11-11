import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';

import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Images from "./components/Images";
import Model from './components/Model';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';

function App() {
  const [src, setSrc] = useState(null);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/images" component={Images}>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
//{src &&  <Model src={src} setSrc={setSrc} />}
export default App;
