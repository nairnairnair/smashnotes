import React from 'react'
import './Card.css'

const Card = ({title, body, id, deleteNote}) => {
    return (
        <div name="note-card" className="note-card">
            <h3 name="title-card">{title}</h3>
            <p name="body-card">{body}</p>
            <button name="delete-button" onClick={() => deleteNote(id)}>Delete Note</button>
        </div>
    )
}

export default Card