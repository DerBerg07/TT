import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {usersFetchData} from './actions/usersData'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            randomUser: ' ',
            currentPage: 1,
            usersPerPage: 5
        }
        this.handleClick = this.handleClick.bind(this);
    }



    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        this.props.fetchData("users.json");
        this.randomUserFinder = setInterval(()=>{
            const User = this.props.users.users[  Math.floor(Math.random()*this.props.users.users.length)];
            this.setState({
                randomUser: User.name + ' ' + User.surname
            })
        }, 3000);
    }


    render() {


        if (this.props.users.users) {
            const pageCount = [];
            for (let i = 1; i <= Math.ceil(this.props.users.users.length / this.state.usersPerPage); i++) {
                pageCount.push(i);
            }
            const renderPageNumbers = pageCount.map(number => {
                return (
                    <div
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        {number}
                    </div>
                )
            })

            return (
                <div id = 'main'>


                    <div id = "userBlock">
                        <div id = 'randomUser'><h1>Random user - {this.state.randomUser}</h1></div>
                    {this.props.users.users.slice((this.state.currentPage * this.state.usersPerPage) - this.state.usersPerPage, this.state.currentPage * this.state.usersPerPage).map(function (user) {
                            return (
                                <div className={'user'} key = {user.id}>
                                    <h1> {user.name + " " + user.surname}  </h1>
                                    <p>{user.desc}</p>
                                </div>
                            )
                        }
                    )}
                        <div id="pageNumbers"> {renderPageNumbers} </div>
                    </div>

                </div>)
        } else {
            return (<div><p>no users found</p></div>)
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


export default connect(mapStateToProprs, mapDispatchToProps)(App);
