import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "../containers/home/home-page";
import RegistroClientes from "../containers/registro-clientes/registro-clientes.jsx";
import ProtectionElements from "../containers/protection-elements/protection-elements.jsx";
import Registered from '../containers/Registered/registered.jsx'
import PreviewPage from "../containers/preview-data/preview-page";
import PolicyDataPage from  "../containers/policy-treatment-data/policy-treatment-data.page"
import SavePage from '../containers/save/save.page'
import Header from '../components/Header/header.jsx'
import HeaderModal from '../components/HeaderModal/header-modal.jsx'
import FooterHome from '../components/FooterHome/footer-home.jsx'
import Footer2 from '../components/Footer2/footer2.jsx'
import FooterRegistered from '../components/FooterRegistered/footer-registered.jsx'
import FooterElements from '../components/FooterElements/footer-elements.jsx'
import ModalComponent from '../components/modal/modal.component.jsx'

const App = () => {
  return (
      <BrowserRouter>     
              <Switch>
                <Route exact path= "/home" component={HomePage} />
                <Route exact path= "/registro-clientes" component={RegistroClientes} />
                <Route exact path= "/protection-elements" component={ProtectionElements} />
                <Route exact path= "/preview" component={PreviewPage} />
                <Route exact path= "/policy_data" component={PolicyDataPage} />
                <Route exact path= "/save" component={SavePage} />
                <Route exact path= "/header" component={Header} />
                <Route exact path= "/headerModal" component={HeaderModal} />
                <Route exact path= "/FooterHome" component={FooterHome} />
                <Route exact path= "/FooterElements" component={FooterElements} />
                <Route exact path= "/footer2" component={Footer2} />
                <Route exact path= "/FooterRegistered" component={FooterRegistered} />
                <Route exact path= "/Registered" component={Registered} />
                <Route exact path= "/modal" component={ModalComponent} />
                <Redirect to="/home"/>
              </Switch> 
      </BrowserRouter>
  );
}

export default App;
