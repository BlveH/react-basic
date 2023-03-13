import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false
    };

    handleShowJob = () => {
        this.setState(
            { showJob: !this.state.showJob }
        );
    };

    render() {
        let { arrayJob } = this.props;
        let { showJob } = this.state;
        return (

            <>
                <div>
                    {showJob === true ?
                        <>
                            <div>
                                <button onClick={() => this.handleShowJob()}>
                                    Hide
                                </button>
                            </div>

                            <div>
                                {arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                        :

                        <div>
                            <button onClick={() => this.handleShowJob()}>
                                Show
                            </button>
                        </div>
                    }
                </div>
            </>
        );
    }
}

export default ChildComponent;