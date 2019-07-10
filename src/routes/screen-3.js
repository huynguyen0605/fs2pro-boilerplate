import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.app.screen3Value,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);