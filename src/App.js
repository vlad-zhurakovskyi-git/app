import React, {Component} from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './store/reducers';

import AuthContainer from './components/auth/AuthContainer';
import MainContaner from "./components/main/MainContainer";
import Loader from "react-loader"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };

        this.setLoad = this.setLoad.bind(this);
    }

    setLoad(upateLoad) {
        this.setState({
            loading: upateLoad
        })
    }

    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <Loader loaded={this.state.loading}/>
                    <AuthContainer setLoad={this.setLoad}/>
                    <MainContaner/>
                </Provider>
            </div>
        );
    }
}

export default App;
