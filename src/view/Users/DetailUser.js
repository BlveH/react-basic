import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
    state = {
        users: {}
    };
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                users: res && res.data && res.data.data ? res.data.data : {}
            });
        }
    }
    handleBack = () => {
        this.props.history.push('/user');
    };
    render() {
        let { users } = this.state;
        let isEmptyObj = Object.keys(users).length === 0;
        return (
            <>

                <div> Hello user with id : {this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div>User name: {users.first_name} - {users.last_name}</div>
                        <div>User email: {users.email}</div>
                        <div><img src={users.avatar}></img></div>
                        <div>
                            <button onClick={() => this.handleBack()}>Back</button>
                        </div>
                    </>
                }

            </>

        );
    }
}

export default withRouter(DetailUser);
