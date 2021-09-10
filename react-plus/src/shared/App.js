import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import { Grid } from "../elements";

import Header from "../components/Header";

function App() {
    return (
        <React.Fragment>
            <Grid>
                <Header />
                <BrowserRouter>
                    <Route path="/" exact component={PostList} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/signup" component={SignUp} />
                </BrowserRouter>
            </Grid>
        </React.Fragment>
    );
}

export default App;