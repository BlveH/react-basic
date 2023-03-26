import React from "react";
import Color from "../HOC/Color";
import image from "../../assets//image/img.png";
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
class Home extends React.Component {

    handleDeleteDataRedux = (user) => {

        this.props.deleteDataRedux(user);
    };

    handleCreateDataRedux = () => {
        this.props.addDataRedux();
    };

    render() {
        let listUser = this.props.reduxState;
        return (
            <>
                <div>
                    Hello world with BLUE!

                </div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <button onClick={() => { this.handleDeleteDataRedux(item); }}>DELETE</button>
                                </div>
                            );
                        })
                    }
                </div>
                <div>
                    <button onClick={() => { this.handleCreateDataRedux(); }}>ADD</button>
                </div>
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        reduxState: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteDataRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addDataRedux: () => dispatch({ type: 'CREATE_USER' })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));