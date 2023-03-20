import React from "react";
import ListTodo from './ListTodo';

class AddTodo extends React.Component {

    state = {
        title: ""
    };

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleAddTodo = () => {
        {
            if (!this.state.title) {
                alert("Missing prams");
            }
        }

        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        };

        this.props.addNewTodo(todo);

        this.setState({
            title: ''
        });
    };

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="btn-add"
                    onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        );
    }

}

export default AddTodo;