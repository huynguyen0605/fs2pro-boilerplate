import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'

import { path } from '../utils'

import screen1 from '../routes/screen-1';
import screen2 from '../routes/screen-2';
import screen3 from '../routes/screen-3';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <Switch>
                        <Route path={path.screen1} component={screen1} />
                        <Route path={path.screen2} component={screen2} />
                        <Route path={path.screen3} component={screen3} />
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