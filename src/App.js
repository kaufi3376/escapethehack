import React, { useEffect, useRef } from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import AppRoute from "./util/AppRoute"

//Views
import Home from "./Views/Home"
import About from "./Views/About"
import Dashboard from "./Views/Dashboard"
import Game from './Views/Game';
import Authenticationarea from "./Authentication/Authenticationarea"

//Design
import antdLayout from './Layouts/antdLayout';
import GameLayout from './Layouts/GameLayout';

//History
import { createBrowserHistory } from "history";

//Context
import AuthContextProvider from "./util/AuthContext"
import GameContextProvider from "./util/GameContext"
import RiddleContextProvider from "./util/RiddleContext"






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
            <GameContextProvider>
             <RiddleContextProvider>
              <AppRoute exact path ="/" component={Home} layout={antdLayout} />
              <AppRoute exact path ="/about" component={About} layout={antdLayout} />
              <AppRoute exact path ="/authentication" component={Authenticationarea} layout={antdLayout} />
              <AppRoute exact path ="/dashboard" component={Dashboard} layout={antdLayout} />
          
         
             <AppRoute exact path ="/game" component={Game} layout={GameLayout} />
             </RiddleContextProvider>
            </GameContextProvider>
           </AuthContextProvider>

        </Switch>
      </Route>
    </BrowserRouter>
 
  );
}

export default App;
