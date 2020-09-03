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
import {ProfilePage} from "./pages/ProfilePage"
import {SignInPage} from "./pages/SignInPage"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Navigation } from './shared/components/Navigation'
import { FooterElement } from './shared/components/FooterElement'
import "./pages/styleHome.css"
import {configureStore} from '@reduxjs/toolkit'
import reducer from './store'
import {Provider} from 'react-redux'

const store = configureStore({reducer})
library.add(faLinkedin);

const Routing = () => (
  <>
    <Provider store={store}>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/muralsPage" component={MuralsPage} />
        <Route exact path="/routesMainPage" component={RoutesMainPage} />
        <Route exact path="/routePage/:routeId" component={RoutePage} routeId=":routeId" />
        <Route exact path="/contactPage" component={ContactPage} />
        <Route exact path="/logInPage" component={LogInPage} />
        <Route exact path="/profilePage" component={ProfilePage} />
        <Route exact path="/" component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
      <FooterElement/>
    </BrowserRouter>
  </Provider>
    </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));