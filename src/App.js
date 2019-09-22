import React, {Component} from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './store/reducers';

import AuthContainer from './components/auth/AuthContainer';
import MainContaner from "./components/main/MainContainer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

class App extends Component{
    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <AuthContainer/>
                    <MainContaner/>
                </Provider>
            </div>
        );
    }
}

export default App;
