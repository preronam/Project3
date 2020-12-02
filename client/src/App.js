import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import SearchPage from "./pages/Searchpage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ThemeProvider} from "@material-ui/core"
import theme from "./theme";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={SearchPage} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;