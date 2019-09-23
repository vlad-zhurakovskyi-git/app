import React, {Component} from 'react';
import TodoItem from "./TodoItem";

export default class TodoItemContainer extends Component{
    render() {
        const { todoTask, todoStatus, todoId, todoDate, index } = this.props;
        return(
            <TodoItem
                index={ index }
                todoTask={ todoTask }
                todoStatus={ todoStatus }
                todoId={ todoId }
                todoDate={ todoDate }
            />
        )
    }
}