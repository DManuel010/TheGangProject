import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import routes, { errorRoutes } from "./routes";
import { FirebaseContextProvider } from "./context/FirebaseContext";

function App() {
  return (
    <FirebaseContextProvider>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route key={route.name} component={route.component} path={route.path} exact={route.exact} />
          ))}
          {errorRoutes.map(route => (
            <Route key={route.name} component={route.component} path={route.path} exact={route.exact} />
          ))}
        </Switch>
      </Router>
    </FirebaseContextProvider>
  );
}

export default App;
