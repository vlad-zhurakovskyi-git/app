import React, {Component} from 'react';

export default class Auth extends Component{
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange(event) {
        const { setEmailText } = this.props;

        setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        const { setPasswordText } = this.props;

        setPasswordText(event.target.value);
    }

    render() {
        const { email, password } = this.props;

        return(
            <section className="auth">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-4">
                            <h1 className="auth__title text-center">Sign in to Application</h1>
                            <form className="auth-form">
                                <div className="auth-form__container">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email</label>
                                        <input
                                            onChange={this.onEmailChange}
                                            value={email}
                                            className="form-control"
                                            type="text"
                                            id="email"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input
                                            onChange={this.onPasswordChange}
                                            value={password}
                                            className="form-control"
                                            type="text"
                                            id="password"
                                        />
                                    </div>

                                    <button className="btn btn-primary w-100" type="button">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}