import React, {Component} from 'react';
import {usersFetchData} from '../../actions/usersData'
import {connect} from "react-redux";
import User from "../User/User";
import PageNumber from "./PageNumbers/PageNumbers"
import RandomUser from "./RandomUser/RandomUser"

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

    pageCount(users) {
        let  pageCount = [];
        for (let i = 1; i <= Math.ceil(users.length / this.state.usersPerPage); i++) {
            pageCount.push(i);
        }
        return pageCount;
    }


    render() {
        const currentP = this.state.currentPage;
        const usersPerP = this.state.usersPerPage;
        const users  = this.props.users.users.users;
        const fetched  = this.props.users.fetched;
        const error = this.props.users.error;


        return(
                fetched ?
                    !error?
            <div id = "userBlock">

                <RandomUser users = {users}/>

                {users.slice((currentP * usersPerP) - usersPerP, currentP * usersPerP).map(function (user) {
                    return <User user = {user} key = {user.id}/>
                    }
                )}


                <div id = "pageNumbers">
                {this.pageCount(users).map( number => {
                    return  <PageNumber number = {number} updateCurrentPage = {this.updateCurrentPage} key = {number}/>
                    }
                )}
                </div>

            </div>
            :
                        <div>
                            <h1>Error {error} </h1>
                        </div>
            :
                    <div>
                        <h1>Loading</h1>
                    </div>
            )



    }

}
const mapStateToProprs = state => {
    return {
        users: state.users,
        err: state.err
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(usersFetchData(url))
    };
};

export default  connect(mapStateToProprs, mapDispatchToProps)(UsersBlock)