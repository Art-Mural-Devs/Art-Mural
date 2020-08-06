import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { FourOhFour } from "./pages/FourOhFour";
import { Home } from "./pages/Home";
import {MuralsPage} from "./pages/MuralsPage"
import {RoutesMainPage} from "./pages/RoutesMainPage"
import {RoutePage} from "./pages/RoutePage"
import {ContactPage} from "./pages/ContactPage"
import {LogInPage} from "./pages/LogInPage"


import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Navigation } from './shared/components/Navigation'
import { FooterElement } from './shared/components/FooterElement'
import "./pages/styleHome.css"

library.add(faLinkedin);

const Routing = () => (
  <>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/muralsPage" component={MuralsPage} />
        <Route exact path="/routesMainPage" component={RoutesMainPage} />
        <Route exact path="/routePage" component={RoutePage} />
        <Route exact path="/contactPage" component={ContactPage} />
        <Route exact path="/logInPage" component={LogInPage} />
        <Route exact path="/" component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
      <FooterElement/>
    </BrowserRouter>
  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));