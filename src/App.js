import React, { useEffect, useRef } from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import AppRoute from "./util/AppRoute"

//Views
import Home from "./Views/Home"
import About from "./Views/About"
import Dashboard from "./Views/Dashboard"

//Design
import antdLayout from './Layouts/antdLayout';

//History
import { createBrowserHistory } from "history";

//Authentication
import AuthContextProvider from "./util/AuthContext"
import Authenticationarea from "./Authentication/Authenticationarea"




const history = createBrowserHistory();

function App() {




  useEffect(()=>{
    
    document.title="Escape the Hack"
    
  },)

 

  return (
    <BrowserRouter>
      <Route history={history}>
        <Switch>
          <AuthContextProvider>
              <AppRoute exact path ="/" component={Home} layout={antdLayout} />
              <AppRoute exact path ="/about" component={About} layout={antdLayout} />
              <AppRoute exact path ="/authentication" component={Authenticationarea} layout={antdLayout} />
              <AppRoute exact path ="/dashboard" component={Dashboard} layout={antdLayout} />
          </AuthContextProvider>
         </Switch>
      </Route>
    </BrowserRouter>
 
  );
}

export default App;
