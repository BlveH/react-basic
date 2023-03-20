import React from "react";
import './Todo.scss';
import AddTodo from "./AddTodo";
import AddComponent from './../AddComponent';


class ListTodo extends React.Component {

    state = {
        listTodo: [{ id: 1, title: 'Doing homework' },
        { id: 2, title: 'Playing game' },
        { id: 3, title: 'Listen to music' }]
    };

    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        });
    };

    render() {
        let { listTodo } = this.state;
        return (
            <div className="todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="todo-content">
                    {listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                <span>{index + 1} - {item.title}</span>
                                <button className="btn-edit">Edit</button>
                                <button className="btn-delete">Delete</button>
                            </div>
                        );
                    })}


                </div>
            </div>
        );
    }
}

export default ListTodo;