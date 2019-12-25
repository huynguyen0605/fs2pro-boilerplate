import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'


import { userIsAuthenticated } from '../hoc/authentication';

import { path } from '../utils'

import screen1 from '../routes/screen-1';
import screen2 from '../routes/screen-2';
import screen3 from '../routes/screen-3';

import axios from '../axios';

class App extends Component {
    componentDidMount() {
        console.log('huynvq::===========>getDummy');
        axios.get('sample/returnMongoDummy').then(data => {
            console.log('huynvq::============>data', data);
        }).catch(error => {
            console.log('huynvq::==========>error', error);
        })
    };
    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <Switch>
                        <Route path={path.screen1} component={screen1} />
                        <Route path={path.screen2} component={userIsAuthenticated(screen2)} />
                        <Route path={path.screen3} component={userIsAuthenticated(screen3)} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);