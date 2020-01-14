import React,{Component} from "react";

class RandomUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            randomUser: ''
        }
    }

    componentDidMount() {
        this.randomUserFinder = setInterval(()=>{
            const User = this.props.users[  Math.floor(Math.random()*this.props.users.length)];
            this.setState({
                randomUser: User.name + ' ' + User.surname
            })
        }, 3000);
    }
    render() {


        return(
            <div id = "randomUser">
                <h1>Random User - {this.state.randomUser}</h1>
            </div>
        )
    }
}

export default RandomUser