import React, {Component} from 'react';
import firebase from "../../firebase";
import TodoListContainer from "./todoList/TodoListContainer"

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.unAuth = this.unAuth.bind((this))
    }

    unAuth() {
        firebase.auth().signOut().then(function() {
            window.location.reload();
            console.log('signout')

        }).catch(function(error) {
            console.log(error)
        })
    }

    render() {
        return(
            <section className="page">
                <button className="page__btn-signout btn btn-light" onClick={this.unAuth}>Sign Out</button>

                <TodoListContainer/>
            </section>
        )
    }
}