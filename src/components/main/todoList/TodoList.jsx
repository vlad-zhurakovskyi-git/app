import React, {Component} from 'react';
import TodoItemContainer from "./todoItem/TodoItemContainer";

export default class TodoList extends Component {
    render() {
        const { collection } = this.props;

        return(
            <section className="todo-list">


                {collection.map(( item, index ) =>
                    <TodoItemContainer
                        key={ index }
                        index = { index }
                        todoTask={ item.task }
                        todoStatus={ item.status }
                        todoId={ item.id }
                        todoDate={ item.date }
                    />
                )}
            </section>
        )
    }
}