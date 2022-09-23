import './App.css';
import React, { Component } from 'react'
import CharacterData from '../CharacterData/CharacterData.js'
import { Routes, Route, Link } from "react-router-dom"
import Form from '../Form/Form.js'
import Card from '../Card/Card.js'
import Note from '../Note/Note.js'

class App extends Component {
  constructor() {
    super()
    this.state =  {
    }
  }
  render = () => {
    return (
    <main className='main'>
      <img src='../Assets/Images/logo.png' alt='SMASHNOTES'></img>
      <h1>SMASHNOTES</h1>
      <p>sup</p>
        <form>
        <CharacterData></CharacterData>
        <Form></Form>
        <Card></Card>
        <Note></Note>
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
