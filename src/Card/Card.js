import React from 'react'
import './Card.css'

const Card = ({title, body, id, deleteNote}) => {
    return (
        <div className="note-card">
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => deleteNote(id)}>Delete Note</button>
        </div>
    )
}

export default Card