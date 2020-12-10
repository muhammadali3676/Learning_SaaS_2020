import React from 'react';


function Parent(props)
{
    return (
        <div>
            <h2>I had : {props.dishName}</h2>
            <h2>I also had another : {props.dishName}</h2>
        </div>
    );
}

export default Parent;