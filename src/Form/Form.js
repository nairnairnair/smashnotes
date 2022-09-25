import React from 'react'
import './Form.css';

const FormComponent = ({charName}) => {
    return (
        <div className="matchup-note-container">
            <h2>Add {charName} Matchup Note:</h2>
            <form className='char-input'>
                <input className='note-title' type='text' placeholder='Note Title'></input>
                <textarea className='note-body' rows="20" cols="60" placeholder='Note Body'></textarea>
                <button className='note-submit'>Submit</button>
            </form>
            <h2>{charName} Matchup Notes:</h2>
        </div>
    )
}

export default FormComponent