import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import registerServiceWorker from "./registerServiceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import firebase from "./firebase";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevtools} from 'redux-devtools-extension';

const store = createStore(()=>{}, composeWithDevtools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user);
        // setUser(user);
        this.props.history.push("/");
      }
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const RootWithAuth = withRouter(Root);
ReactDOM.render(
  <Provider store ={store}>
    <Router>
     <RootWithAuth/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
