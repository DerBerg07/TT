import React, {Component} from 'react';


function PageNymber(props) {
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

export default PageNymber