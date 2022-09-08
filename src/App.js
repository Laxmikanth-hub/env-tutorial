/*import React, { Component } from "react";
import { AuthProvider } from "./providers/authProvider";
import { BrowserRouter } from "react-router-dom";
import { PRoutes } from "./routes/routes";

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter children={PRoutes} basename={"/"} />
      </AuthProvider>
    );
  }
}*/
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          {process.env.REACT_APP_BASE_URL}
          {process.env.REACT_APP_AUTH_URL}
          {process.env.REACT_APP_IDENTITY_CLIENT_ID}
          {process.env.REACT_APP_REDIRECT_URL}
          {process.env.REACT_APP_SILENT_REDIRECT_URL}
          {process.env.REACT_APP_LOGOFF_REDIRECT_URL}
          {process.env.API_URL}


        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;