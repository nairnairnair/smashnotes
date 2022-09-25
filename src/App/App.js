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

  //things to pass:
  //the object that pertains

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
          <select onChange={(event) => this.handleSelect(event)}>
            <option disabled hidden>CHOOSE YOUR CHARACTER</option>
            {this.formattedDropdownData}
          </select>
          <Link to={`/characters/${this.state.chosenCharacterID}`}>
            <button onClick={this.dataImageHelper}>Go!</button>
          </Link>
        </form>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route 
              exact path='/characters/:id' 
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
          </Routes>
    </main>) 
  }
}

{/* <Route exact path="/rivers/:id" */}

export default App;

//dynamic routing based on id
//after your route do :id 
//use 6 cause why not
//us e navigation function which will take you to the route using interp id
//

//create array of images to import
//set up fetch data to display in the screen for each character