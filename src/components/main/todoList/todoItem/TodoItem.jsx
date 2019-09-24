import React, {Component} from 'react';
import firebase from "../../../../firebase";

export default class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            readOnly: true
        };

        this.toggleStatusTask = this.toggleStatusTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.editMode = this.editMode.bind(this);
        this.saveChange = this.saveChange.bind(this);
    }

    toggleStatusTask() {
        const { todoId, todoStatus } = this.props;

        firebase.firestore().collection("todo_list").doc(todoId).update({
            status: !todoStatus
        });
    }

    deleteTask() {
        const { todoId } = this.props;

        firebase.firestore().collection("todo_list").doc(todoId).delete();
    }

    editTask(event) {
        const { todoId } = this.props;

        firebase.firestore().collection("todo_list").doc(todoId).update({
            task: event.target.value
        });
    }

    editMode() {
        this.setState({
            readOnly: !this.state.readOnly
        })
    }

    saveChange(event) {
        event.keyCode === 13 && this.setState({readOnly: true})
    }

    render() {
        const { todoTask, todoStatus, index } = this.props;
        const { readOnly } = this.state;

        return(
            <div className="todo-item">
                <div className="todo-item__info">
                    <input
                        onChange={this.toggleStatusTask}
                        className="todo-item__checkbox_hidden"
                        type="checkbox"
                        id={`statusTask ${ index }`}
                        name={`statusTask ${ index }`}
                        value="statusTask"
                        checked={ todoStatus }
                    />

                    <label
                        className="todo-item__checkbox"
                        htmlFor={`statusTask ${ index }`}>
                        {todoStatus && <i className="icon icon-tick"/>}
                    </label>

                    <input
                        onChange={this.editTask}
                        onKeyDown={this.saveChange}
                        className={`todo-item__label ${!readOnly ? 'todo__readonly' : ''} ${todoStatus ? 'todo__checked' : ''}`}
                        value={todoTask} readOnly={readOnly}/>

                    {/*<label*/}
                    {/*    className={`todo-item__label ${todoStatus && 'todo__checked'}`}*/}
                    {/*    htmlFor={`statusTask ${ index }`}>*/}
                    {/*    { todoTask }*/}
                    {/*</label>*/}
                </div>

                <button className="btn todo-item__edit" onClick={this.editMode}>
                    <i className="icon icon-edit"/>
                </button>

                <button className="btn todo-item__delete" onClick={this.deleteTask}>
                    <i className="icon icon-backspace-outline"/>
                </button>
            </div>
        )
    }
}