import React from 'react';

function Note(props){
    return (
        <div>
            <p>{props.title}</p>
            <div>{props.body}</div>
            <button>edytuj</button>
            <button>usun</button>
        </div>
    )
}


export default Note;