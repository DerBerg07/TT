import React from 'react';



export default  function User(props) {
    const {user} = props;
    return (<div className={'user'}>
        <h1> {user.name + " " + user.surname}  </h1>
        <p>{user.desc}</p>
    </div>)
}