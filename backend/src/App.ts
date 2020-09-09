import express, { Application } from 'express';
import MuralRoute from './routes/mural.routes';
import SignupRoute from './routes/sign-up.route';
import LikeRoute from './routes/like.routes';
import IndexRoutes from './routes/index.routes';
import {SignOutRoute} from "./routes/sign-out.route";
import morgan from 'morgan';
import bodyParser from 'body-parser';
import RouteRoute from './routes/route.routes';


// Routes

import signupRoutes from './routes/sign-up.route'
// import Basicauth from './routes/basic-authentication'

import { SignInRouter } from './routes/sign-in.route';
import { passportMiddleware } from './lib/auth.controller';
const session = require("express-session");
import passport = require('passport');
const MemoryStore = require('memorystore')(session);
import csrf from "csurf";
import {ProfileRoute} from "./routes/profile.route";


export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {
        passportMiddleware; // eslint-disable-line
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external abqmural.env file or defaults to 3000
    private settings () {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middleware () {

        const sessionConfig  =  {
            store: new MemoryStore({
                checkPeriod: 10800
            }),
            secret:"secret",
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        };

        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
        this.app.use(bodyParser.json());
        this.app.use(session(sessionConfig));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {
        this.app.use('/apis',IndexRoutes);
        this.app.use('/apis/murals', MuralRoute);
        // this.app.use('/apis/murals/year', MuralRoute)
        // this.app.use('/apis/murals/artist', MuralRoute)
        // this.app.use('/apis/murals/title', MuralRoute)
        this.app.use('/apis/sign-up', signupRoutes)
        this.app.use('/apis/sign-in', SignInRouter);
        this.app.use('/apis/sign-out', SignOutRoute);
        this.app.use('/apis/like', LikeRoute);
        this.app.use('/apis/profile', ProfileRoute);
        this.app.use('/apis/routes', RouteRoute);


    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}