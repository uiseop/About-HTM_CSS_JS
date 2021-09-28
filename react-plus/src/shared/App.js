import React from "react";
import "./App.css";
// eslint-disable-next-line
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import { Grid } from "../elements";

import Header from "../components/Header";

import {ConnectedRouter} from 'connected-react-router'
import { history } from "../redux/configureStore";

function App() {
    return (
        <React.Fragment>
            <Grid>
                <Header />
                <ConnectedRouter history={history}>
                    <Route path="/" exact component={PostList} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/signup" component={SignUp} />
                </ConnectedRouter>
            </Grid>
        </React.Fragment>
    );
}

export default App;