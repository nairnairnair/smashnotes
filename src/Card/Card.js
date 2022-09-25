import React from 'react'
import './Card.css'

const Card = ({title, body, id}) => {
    return (
        <div className="note-card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Card