import React, {Component} from 'react'
import './Form.css';


class FormComponent extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            body: '',
            whichChar: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
        this.setState({whichChar: this.props.whichChar})
    }


    submitNote = event => {
        event.preventDefault()
        const newNote = {
            id: Date.now(),
            ...this.state
        } 
    this.props.addNote(newNote)
    }
    
    render (){
        return (
            <div className="matchup-note-container">
                <h2>Add {this.props.charName} Matchup Note:</h2>
                <form className='char-input'>
                    <input 
                        className='note-title'
                        name='title' 
                        type='text' 
                        value={this.state.title} 
                        placeholder='Note Title'
                        onChange={event => this.handleChange(event)}>
                    </input>
                    <textarea 
                        className='note-body'
                        name='body'
                        rows="20" 
                        cols="60" 
                        value={this.state.body} 
                        placeholder='Note Body'
                        onChange={event => this.handleChange(event)}>
                    </textarea>
                    <button 
                        className='note-submit'
                        name='note-submit' 
                        onClick={event => this.submitNote(event)}>
                        Submit
                    </button>
                </form>
                <h2>{this.props.charName} Matchup Notes:</h2>
            </div>
        )
    }
}

export default FormComponent