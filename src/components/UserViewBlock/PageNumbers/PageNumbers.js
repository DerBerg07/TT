import React, {Component} from 'react';


function PageNumber(props) {
    const handleNumberClick = ()=> props.updateCurrentPage(props.number);

    return(
        <div
            key={props.number}
            id={props.number}
            onClick={handleNumberClick}
        >
            {props.number}
        </div>
    )
}

export default PageNumber