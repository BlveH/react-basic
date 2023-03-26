import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    };

    handleChangeJob = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        });
    };
    handleOnClick = (event) => {

        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert("Missing prams");
        }
        this.props.addJob({
            id: Math.random() * 1001,
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: "",
            salary: "",
        });
    };
    render() {
        return (
            <form >
                <label htmlFor="fname">Job:</label><br />
                <input type="text" value={this.state.title} onChange={(event) => this.handleChangeJob(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                <input type="submit" onClick={(event) => this.handleOnClick(event)} />
            </form>
        );
    }
}

export default AddComponent;