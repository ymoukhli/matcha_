import Home from './routes/Home.js'
import EditInfo from './routes/EditInfo.js'
import Forum from './routes/Forum.js'
import React, { useState } from 'react'
import {BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';

export function App() {
  return (
    // add routers;
    <div>
    <Switch>
      <Route path="/fillInfo">
        <Forum />
      </Route>
      <Route path="/editInfo">
        <EditInfo />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
