import React, {Component} from 'react';
import { connect } from "react-redux";

import { setSession, setEmailText, setPasswordText } from '../../store/auth/actions';
import Auth from "./Auth";
import firebase from "../../firebase";

class AuthContainer extends Component{
    componentDidMount() {
        const { setSession } = this.props;

        firebase.auth().onAuthStateChanged(user => {
            user && setSession(true)
        });
    }

    render() {
        const { session, email, password, setEmailText, setPasswordText } = this.props;

        return(
            <React.Fragment>
                {!session && <Auth
                    session={session}
                    email={email}
                    password={password}
                    setEmailText={setEmailText}
                    setPasswordText={setPasswordText}
                />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        session: state.auth.session
    }
};

const mapDispatchToProps = {
    setEmailText,
    setPasswordText,
    setSession
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);