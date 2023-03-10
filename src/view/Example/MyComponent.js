import React from "react";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    };


    handleChangeFName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    };

    handleChangeLName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    };

    handleOnClick = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLName(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleOnClick(event)} />
                </form>
            </>
        );
    }
}

export default MyComponent;;