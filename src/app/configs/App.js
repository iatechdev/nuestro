import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "../containers/home/home-page";
import PreviewPage from "../containers/preview-data/preview-page";
import PolicyDataPage from  "../containers/policy-treatment-data/policy-treatment-data.page"
import SavePage from '../containers/save/save.page'

const App = () => {
  return (
      <BrowserRouter>     
              <Switch>
                <Route exact path= "/home" component={HomePage} />
                <Route exact path= "/preview" component={PreviewPage} />
                <Route exact path= "/policy_data" component={PolicyDataPage} />
                <Route exact path= "/save" component={SavePage} />
                <Redirect to="/home"/>
              </Switch> 
      </BrowserRouter>
  );
}

export default App;
