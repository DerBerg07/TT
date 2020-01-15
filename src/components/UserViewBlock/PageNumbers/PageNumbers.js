import React, {Component} from 'react';


function PageNumber(props) {
    return(
        <div
            key={props.number}
            id={props.number}
            onClick={()=>{
                props.updateCurrentPage(props.number)
            }}
        >
            {props.number}
        </div>
    )
}

export default PageNumber