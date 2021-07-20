import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Brands } from "./pages/Brands";
import { Creators } from "./pages/Creators";
import AccountDetails from "./pages/AccountDetails";

function App() {
  return (
    <Router>
      {/* <Men /> */}
      <Navbar />

      <Switch>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path="/brands" component={Brands} />
        <Route path="/creators" component={Creators} />
        <Route path="/accdetails" component={AccountDetails} />
        {/* <Route path='/annual' component={AnnualReport} /> */}
        {/* <Route path='/team' component={Teams} /> */}
        {/* <Route path='/blogs' component={Blogs} /> */}
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
  );
}
export default App;
