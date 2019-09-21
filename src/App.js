import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './store/reducers';

import AuthContainer from './components/auth/AuthContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="app">
        <Provider store={store}>
            <AuthContainer/>
        </Provider>
    </div>
  );
}

export default App;
