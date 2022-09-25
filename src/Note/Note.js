import React from 'react'
import './Note.css';
import Card from '../Card/Card.js'

const Notes = (({notes, deleteNote, currentWhichChar}) => {

    const noteCards = notes.map((note) => {
        console.log('currentWhichChar', currentWhichChar, 'card whichChar', note.whichCharCard)
        if (currentWhichChar === note.whichChar) {
            return (
                <Card
                    title={note.title}
                    body={note.body}
                    id={note.id}
                    key={note.id}
                    deleteNote={deleteNote}>
                </Card>
            )
        }
    })

    return (
        <div>
            {noteCards}
        </div>
    )
})

export default Notes