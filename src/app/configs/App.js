import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "../containers/home/home-page";
import RegistroClientes from "../containers/registro-clientes/registro-clientes.jsx";
import PreviewPage from "../containers/preview-data/preview-page";
import PolicyDataPage from  "../containers/policy-treatment-data/policy-treatment-data.page"
import SavePage from '../containers/save/save.page'
import Footer from '../components/Footer/footer.jsx'
import Footer2 from '../components/Footer2/footer2.jsx'
import Header from '../components/Header/header.jsx'

const App = () => {
  return (
      <BrowserRouter>     
              <Switch>
                <Route exact path= "/home" component={HomePage} />
                <Route exact path= "/registro-clientes" component={RegistroClientes} />
                <Route exact path= "/preview" component={PreviewPage} />
                <Route exact path= "/policy_data" component={PolicyDataPage} />
                <Route exact path= "/save" component={SavePage} />
                <Route exact path= "/footer" component={Footer} />
                <Route exact path= "/footer2" component={Footer2} />
                <Route exact path= "/header" component={Header} />
                <Redirect to="/home"/>
              </Switch> 
      </BrowserRouter>
  );
}

export default App;
