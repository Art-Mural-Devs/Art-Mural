import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {library} from "@fortawesome/fontawesome-svg-core"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Navigation } from './components/Navigation'
import { FooterElement } from './components/FooterElement'
import "./pages/styleHome.css"
library.add(faLinkedin);



const Routing = () => (
  <>
    <Navigation/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>
    <FooterElement/>
  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));