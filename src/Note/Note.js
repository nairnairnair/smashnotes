import React from 'react'
import './Note.css';
import Card from '../Card/Card.js'

const Notes = () => {

    const noteCards = () => {
        return (
            <Card></Card>
        )
    }


    return (
        <div>
            {noteCards}
        </div>
    )
}

export default Notes