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
import {ProfileDetails} from "./pages/ProfileDetails"
import {LogInPage} from "./pages/LogInPage"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Navigation } from './shared/components/Navigation'
import { FooterElement } from './shared/components/FooterElement'
import "./pages/styleHome.css"
import { configureStore } from '@reduxjs/toolkit'
import reducer from './store'
import {Provider} from "react-redux";
import { faDove, faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'


const store = configureStore({reducer})

library.add(faLinkedin, faEnvelope,faKey, faDove, faUser);

const Routing = (store) => (
  <>
    <Provider store={store}>
      <Navigation/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/profileDetails" component={ProfileDetails} />
        <Route exact path="/murals" component={MuralsPage} />
        <Route exact path="/routePage" component={RoutePage} />
        <Route exact path="/routesMainPage" component={RoutesMainPage} />
        <Route exact path="/murals/byRouteId/:routeId" component={RoutePage} routeId=":routeId" />
        <Route exact path="/logInPage" component={LogInPage} />
        <Route exact path="/" component={Home}/>
      </Switch>
      <FooterElement/>
    </BrowserRouter>
    </Provider>
  </>
);

ReactDOM.render(Routing(store), document.querySelector("#root"));