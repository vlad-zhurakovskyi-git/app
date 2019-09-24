import React, {Component} from 'react';
import firebase from "../../../../firebase";

export default class NewTask extends Component {
    constructor(props) {
        super(props);

        this.createNewTask = this.createNewTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    createNewTask() {
        const { taskName, setTaskName } = this.props;

        firebase.firestore().collection('todo_list').add({
            task: taskName,
            status: false
        });

        setTaskName('');
    }

    handleChange(event) {
        const { setTaskName } = this.props;

        setTaskName(event.target.value);
    }

    render() {
        return(
            <section className="new-task">
                <input
                    placeholder="Сreate a new task"
                    className="new-task__input"
                    onChange={this.handleChange}
                    value={this.props.taskName}
                    type="text"
                />

                <button
                    onClick={this.createNewTask}
                    className="btn new-task__create"
                    type="button">
                    +
                </button>
            </section>
        )
    }
}