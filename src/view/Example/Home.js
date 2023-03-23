import React from "react";
import Color from "../HOC/Color";
class Home extends React.Component {
    render() {
        return (
            <p>
                Hello world with BLUE!
            </p>
        );
    }
}

export default Color(Home);