import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        return (
            <div>
                {this.props.started ? 1 : 2}
            </div>
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