import React, {Component} from 'react';
import './App.css';

import UsersBlock from "./UserViewBlock/UsersBlock";


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }


    render() {
            return (
                <div id = 'main'>
                  <UsersBlock />
                </div>)
        }





}

export default (App);
