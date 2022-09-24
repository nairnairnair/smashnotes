import './App.css';
import React, { Component } from 'react'
import logo from '../Assets/Images/logo.png'
import getCharacterData from '../APICalls/APICalls';
import { Routes, Route, Link } from "react-router-dom"
import dropdownData from '../CharacterData/dropdownData';
import CharacterPage from '../CharacterPage/CharacterPage';
// import CharacterData from '../CharacterData/CharacterData.js'
// import Form from '../Form/Form.js'
// import Card from '../Card/Card.js'
// import Note from '../Note/Note.js'

class App extends Component {
  constructor() {
    super()
    this.state =  {
      chosenCharacterID: ''
    }
  }

  componentDidMount = () => {
    getCharacterData()
    console.log('it worked')
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
          <Link to='/${this.state.chosenCharacterID}'>
            <button>Go!</button>
          </Link>
          <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/${this.state.chosenCharacterID}' element={<CharacterPage/>}/>
          </Routes>
        </form>
    </main>) 
  }
}

export default App;

//dynamic routing based on id
//after your route do :id 
//use 6 cause why not
//us e navigation function which will take you to the route using interp id
//
