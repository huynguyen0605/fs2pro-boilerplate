import React, {Component} from 'react';
import { connect } from 'react-redux';

import {CommonUtils} from '../utils'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
    }
    
    render () {
        return (
            <div>
                {CommonUtils.isNumber1(this.props.value) ? this.props.value : 2}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.app.screen1Value,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);