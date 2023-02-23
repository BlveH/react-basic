import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Hieu",
        nickName: "BLUE"
    };
    render() {
        return (
            <>
                <div>
                    My name is {this.state.name}
                </div>
                <div>
                    My nick name is {this.state.nickName}
                </div>
            </>
        );
    }
}

export default MyComponent;