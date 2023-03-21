import React from "react";
import './Todo.scss';
import AddTodo from "./AddTodo";
import AddComponent from '../Example/AddComponent';
import { toast } from 'react-toastify';


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
        toast.success("Wow so easy!");
    };

    handleDeleteTodo = (todo) => {
        let currentList = this.state.listTodo;
        currentList = currentList.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentList
        });
        toast.success("Delete success!");


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
                                <button className="btn-delete"
                                    onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                            </div>
                        );
                    })}


                </div>
            </div>
        );
    }
}

export default ListTodo;