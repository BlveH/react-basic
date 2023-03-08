import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "",
        nickName: "BLUE"
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleClickButton = () => {
        alert("Happy new year!");
    };
    render() {
        return (
            <>
                <div>
                    <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChangeName(event); }}></input>
                    My name is {this.state['name']}
                </div>
                <div>
                    My nick name is {this.state.nickName}
                </div>
                <div>
                    <button onClick={this.handleClickButton} >Click me</button>
                </div>
            </>
        );
    }
}

export default MyComponent;