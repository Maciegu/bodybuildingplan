import React from 'react';
import Note from '../Note/Note';

class Notes extends React.Component {
    constructor(props){
        super(props);
        const notatki = [
            {
                id: '123',
                title: 'wykap',
                description: 'pamietaj'
            },
            {
                id: '556',
                title: 'szczek',
                description: 'heh'
            }
    
        ];
    }
    
    render(){
        return(
            <div>
                <p>moje notatki: </p>
                {this.notatki.map(note => {
                    <Note title={note.title} description={note.description}/>
                })}
            </div>
        )
    }
}


export default Notes;