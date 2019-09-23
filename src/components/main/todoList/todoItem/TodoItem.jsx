import React, {Component} from 'react';
import firebase from "../../../../firebase";

export default class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    toggleCheckbox() {
        const { todoId, todoStatus } = this.props;

        firebase.firestore().collection("todo_list").doc(todoId).update({
            status: !todoStatus
        });
    }

    deleteItem() {
        const { todoId } = this.props;

        firebase.firestore().collection("todo_list").doc(todoId).delete();
    }

    render() {
        const { todoTask, todoStatus, index } = this.props;

        return(
            <div className="todo-item">
                <div className="todo-item__info">
                    <input
                        onChange={this.toggleCheckbox}
                        className="todo-item__checkbox"
                        type="checkbox"
                        id={`statusTask ${ index }`}
                        name={`statusTask ${ index }`}
                        value="statusTask"
                        checked={ todoStatus }
                    />
                    <label className="todo-item__label" htmlFor={`statusTask ${ index }`}>{ todoTask }</label>
                </div>
                <button className="btn todo-item__delete" onClick={this.deleteItem}>
                    <i className="icon icon-backspace-outline"/>
                </button>
            </div>
        )
    }
}