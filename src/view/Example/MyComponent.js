import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {

        arrayJob: [
            { id: 'Job1', title: 'Dev', salary: '500$' },
            { id: 'Job2', title: 'Tester', salary: '300$' },
            { id: 'Job3', title: 'BA', salary: '400$' }
        ]
    };






    addJob = (job) => {
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        });
    };

    render() {
        return (
            <>
                <AddComponent addJob={this.addJob}></AddComponent>
                <ChildComponent arrayJob={this.state.arrayJob}></ChildComponent>
            </>
        );
    }
}

export default MyComponent;