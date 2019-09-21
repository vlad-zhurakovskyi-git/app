import React, {Component} from 'react';
import { connect } from "react-redux";

import {setEmailText, setPasswordText} from '../../store/auth/actions';
import Auth from "./Auth";

class AuthContainer extends Component{
    render() {
        const { email, password, setEmailText, setPasswordText } = this.props;

        return(
            <Auth
                email={email}
                password={password}
                setEmailText={setEmailText}
                setPasswordText={setPasswordText}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
};

export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);