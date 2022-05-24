import { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,    
    Switch,
    Redirect,
} from "react-router-dom";
import Auth from 'routes/Auth';
import Home from 'routes/Home';

import Profile from 'routes/Profile';
import Navigation from './Navigation';

const AppRouter = ({isLoggedIn}) => {

    return (
        <Router>
            {isLoggedIn && <Navigation />}
            
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/" component={Home} />
                        
                    <Route path="/profile" component={Profile} />
                        
                    </>
                ) : (
                    <>
                    <Route exact path="/">
                        <Auth />
                    </Route>
                    </>
                )}
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default AppRouter;