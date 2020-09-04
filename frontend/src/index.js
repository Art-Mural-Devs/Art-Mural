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
import ContactPage from "./pages/ContactPage"
import {LogInPage} from "./pages/LogInPage"
import ConfirmEmail from "./pages/ConfirmEmail"
import {ProfilePage} from "./pages/ProfilePage"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Navigation } from './shared/components/Navigation'
import { FooterElement } from './shared/components/FooterElement'
import "./pages/styleHome.css"
import {configureStore} from '@reduxjs/toolkit'
import reducer from './store'
import {Provider} from 'react-redux'

const store = configureStore({ reducer})

library.add(faLinkedin);

const Routing = (store) => (
  <>
    <Provider store={store}>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/muralsPage" component={MuralsPage} />
        <Route exact path="/routesMainPage" component={RoutesMainPage} />
        <Route exact path="/routePage" component={RoutePage} />
        <Route exact path="/contactPage" component={ContactPage} />
        <Route exact path="/logInPage" component={LogInPage} />
        <Route exact path="/profilePage" component={ProfilePage} />
        <Route exact path="/" component={Home}/>
        <Route exact path="/confirmEmail" component={ConfirmEmail}/>
        <Route component={FourOhFour}/>
      </Switch>
      <FooterElement/>
    </BrowserRouter>
    </Provider>
  </>
);
ReactDOM.render(Routing(store), document.querySelector('#root'))