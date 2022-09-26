import './App.css';
import React, { Component } from 'react'
import logo from '../Assets/Images/logo.png'
import { Routes, Route, Link } from "react-router-dom"
import dropdownData from '../CharacterData/dropdownData';
import CharacterPage from '../CharacterPage/CharacterPage';
import { imageLinks } from '../Assets/images.js'
import FormComponent from '../Form/Form.js'
import Notes from '../Note/Note.js'

class App extends Component {
  constructor() {
    super()
    this.state =  {
      chosenCharacterID: '',
      characterImage: '',
      allCharacterData: [], 
      chosenCharacterData: {},
      allCharacterImages: null,
      notes: []
    }
  }

  addNote = (newNote) => {
    this.setState({notes: [...this.state.notes, newNote]});
  }

  deleteNote = (id) => {
    console.log(id)
    const filteredNotes = this.state.notes.filter((note) => note.id != id)
    this.setState({notes: filteredNotes})
  }

  getImagePath = () => {
    let image = this.state.allCharacterImages.find((link) => 
    link.id == this.state.chosenCharacterID
    )
    console.log(image)
  this.setState({characterImage: image.image})}

  componentDidMount = () => {
    fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": "http://smashlounge.com/api/chars/all"
  }
})
  .then(response => response.json())
  .catch(error => console.error(error))
  .then((data) => {this.setState({allCharacterData: data})})
    console.log('it worked')
    this.setState({allCharacterImages: imageLinks})
  }
  
  handleSelect = (event) => {
    this.setState({chosenCharacterID: event.target.value});
    console.log(this.state.chosenCharacterID)
}

formattedDropdownData = dropdownData.map(listItem => {
  return (
  <option 
      key={listItem.value} 
      value={listItem.value} 
      className="dropdown-item">
      {listItem.name}
  </option>
  )
})

getData = () => {
  fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `http://smashlounge.com/api/chars/${this.state.chosenCharacterID}`
  }

})
.then(response => response.json())
.then((data) => {this.setState({chosenCharacterData: data})})
}

dataImageHelper = () => {
  this.getImagePath()
  this.getData()
}

  render = () => {
    return (
    <main className='main'>
      <img className='logo' src={logo} alt='SMASHNOTES'/>
        <form>
          <select name="character-select" defaultValue="CHOOSE YOUR CHARACTER" onChange={(event) => this.handleSelect(event)}>
            <option hidden>CHOOSE YOUR CHARACTER</option>
            {this.formattedDropdownData}
          </select>
          <Link to={`smashnotes/characters/${this.state.chosenCharacterID}`}>
            <button name="char-select-button" onClick={this.dataImageHelper}>Go!</button>
          </Link>
        </form>
        <Routes>
            <Route exact path='/smashnotes' element={<p name="home-notes-message">Choose a character to add notes on them!</p>}/>
            <Route 
              exact path='smashnotes/characters/:id' 
              element={
              <div>
                <CharacterPage 
                chosenCharacterData={this.state.chosenCharacterData}
                getImagePath={this.state.characterImage}
                />
                <FormComponent charName={this.state.chosenCharacterData.name} whichChar={this.state.chosenCharacterID} addNote={this.addNote}/>
                <Notes notes={this.state.notes} deleteNote={this.deleteNote} currentWhichChar={this.state.chosenCharacterID}/>
              </div>
              }/>
              <Route path="*" element={
                <div>
                  <p className='come-on-now'>Quit messing around with the URL! We both know whatever nonsense you just typed isn't a real page. Be a good user and navigate using the buttons. Here's one for you to try:</p>
                  <Link to={`/smashnotes`}>
                    <button>Home</button>
                  </Link>
                </div>
                } />
          </Routes>
    </main>) 
  }
}

export default App;
