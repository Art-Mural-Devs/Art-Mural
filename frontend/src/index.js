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
import { Navigation } from './components/Navigation'
import { FooterElement } from './components/FooterElement'
import "./pages/styleHome.css"

library.add(faLinkedin);

const Routing = () => (
  <>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/MuralsPage" component={MuralsPage} />
        <Route exact path="/RoutesMainPage" component={RoutesMainPage} />
        <Route exact path="/RoutePage" component={RoutePage} />
        <Route exact path="/ContactPage" component={ContactPage} />
        <Route exact path="/LogInPage" component={LogInPage} />
        <Route exact path="/" component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
      <FooterElement/>
    </BrowserRouter>
  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));