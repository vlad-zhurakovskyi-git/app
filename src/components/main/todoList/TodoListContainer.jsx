import React, {Component} from 'react';
import TodoList from "./TodoList";
import firebase from "../../../firebase";
import { setCollection } from "../../../store/main/todo/actions";
import { connect } from "react-redux";

class TodoListContainer extends Component{
    componentDidMount() {
        const {setCollection} = this.props;

        firebase
            .firestore()
            .collection('todo_list')
            .onSnapshot(( snapshot ) => {
                const newItems = snapshot.docs.map(( doc ) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setCollection(newItems);
            });
    }

    render() {
        const { collection } = this.props;

        return (
            <TodoList collection={ collection }/>
        )
    }
}

const mapStateToProps = state => {
    return {
        collection: state.todo.collection,
    }
};

const mapDispatchToProps = {
    setCollection
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);