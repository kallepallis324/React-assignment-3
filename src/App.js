import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home"

function App() {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={() =>{
          return <h1>404 Forbidden</h1>
        }}/>
      </Switch>
    </BrowserRouter>
  </>);
}

export default App;
