import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import ProductResult from "./pages/ProductResult"
import Profile from "./pages/Profile"
import SearchPage from "./pages/Searchpage"
import SearchPageRefactor from "./pages/Searchpage2.0"
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
            <Route exact path="/searchrefactor" component={SearchPageRefactor} />
            <Route exact path="/product" component={ProductResult} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;