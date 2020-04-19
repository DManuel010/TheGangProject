import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

import "./App.css";
import routes, { errorRoutes } from "./routes";
import FirebaseContext, { FirebaseContextProvider } from "./context/FirebaseContext";
import LoginPage from "./containers/Login";

// this is a gate that will make any route sit behind a authentication gate
// what it will do is check if current user exist, if it doesn't, it will redirect to login page
const withAuthentication = WrappedComponent => props => {
  const {
    auth: { currentUser },
  } = useContext(FirebaseContext);
  const history = useHistory();
  if (!currentUser) {
    return <LoginPage redirectTo={history.location.pathname} />;
  }
  return <WrappedComponent {...props} />;
};

// Provider will handl
function App() {
  return (
    <FirebaseContextProvider>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.name}
              component={route.protected ? withAuthentication(route.component) : route.component}
              path={route.path}
              exact={route.exact}
            />
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
