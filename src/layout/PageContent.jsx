import React from "react";
import {
  Route,
  Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../pages/HomePage";

const PageContent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default PageContent;
