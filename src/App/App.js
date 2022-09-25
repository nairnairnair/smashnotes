import './App.css';
import React, { Component } from 'react'
import logo from '../Assets/Images/logo.png'
import { Routes, Route, Link } from "react-router-dom"
import dropdownData from '../CharacterData/dropdownData';
import CharacterPage from '../CharacterPage/CharacterPage';
import { imageLinks } from '../Assets/images.js'
// import CharacterData from '../CharacterData/CharacterData.js'
// import Form from '../Form/Form.js'
// import Card from '../Card/Card.js'
// import Note from '../Note/Note.js'

class App extends Component {
  constructor() {
    super()
    this.state =  {
      chosenCharacterID: '',
      characterImage: '',
      allCharacterData: [], 
      allCharacterImages: null
    }
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
            <button onClick={this.getImagePath}>Go!</button>
          </Link>
          <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/characters/:id' element={<CharacterPage props={this.state.chosenCharacterID} getImagePath={this.state.characterImage}/>}/>
          </Routes>
        </form>
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