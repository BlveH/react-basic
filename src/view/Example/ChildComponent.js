import React from "react";

class ChildComponent extends React.Component {
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
        let { name, age, arrayJob } = this.props;
        return (

            <>
                <div>
                    <div>
                        {arrayJob.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ChildComponent;