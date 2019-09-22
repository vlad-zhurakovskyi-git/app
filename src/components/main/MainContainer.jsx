import React, {Component} from 'react';
import Main from "./Main";
import {connect} from "react-redux";

class MainContaner extends Component{
    render() {
        const { session } = this.props;

        return(
            <React.Fragment>
                {session && <Main/>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        session: state.auth.session
    }
};

export default connect(mapStateToProps)(MainContaner);