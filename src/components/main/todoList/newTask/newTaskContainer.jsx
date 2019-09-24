import React, {Component} from 'react';
import NewTask from "./newTask";
import { setTaskName } from "../../../../store/main/todo/actions";
import { connect } from "react-redux";

class NewTaskContainer extends Component{
    render() {
        const { taskName, setTaskName } = this.props;

        return(
            <NewTask taskName={ taskName } setTaskName={ setTaskName }/>
        )
    }
}

const mapStateToProps = state => {
    return {
        taskName: state.todo.taskName
    }
};

const mapDispatchToProps = {
    setTaskName
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskContainer);