import React, {Component} from 'react';
import {usersFetchData} from '../actions/usersData'
import {connect} from "react-redux";
import User from "./User";
import PageNymber from "./PageNumbers"
import RandomUser from "./RandomUser"

class UsersBlock extends Component{
    constructor(props){
        super(props)
        this.state = {
            randomUser: ' ',
            currentPage: 1,
            usersPerPage: 5
        }
    }

    updateCurrentPage = (newValue) => {
        this.setState({
            currentPage: Number(newValue)
        })
    };

    componentDidMount() {
        this.props.fetchData("users.json");

    }


    render() {
        const currentP = this.state.currentPage;
        const usersPerP = this.state.usersPerPage;
        const pageCount = [];
        if (this.props.users.users) {
            for (let i = 1; i <= Math.ceil(this.props.users.users.length / this.state.usersPerPage); i++) {
                pageCount.push(i);
            }
            return(
            <div id = "userBlock">
                <RandomUser users = {this.props.users.users}/>
                {this.props.users.users.slice((currentP * usersPerP) - usersPerP, currentP * usersPerP).map(function (user) {
                    return <User user = {user} key = {user.id}/>
                    }
                )}
                <div id = "pageNumbers">
                {pageCount.map( number => {
                    return  <PageNymber number = {number} updateCurrentPage = {this.updateCurrentPage}/>
                    }
                )}
                </div>
            </div>)
        }else {
            return (
                <div>
                    <h1>No user data avaliable</h1>
                </div>
            )
        }


    }

}
const mapStateToProprs = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(usersFetchData(url))
    };
};

export default  connect(mapStateToProprs, mapDispatchToProps)(UsersBlock)