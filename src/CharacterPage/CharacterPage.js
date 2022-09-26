import React from 'react'
import FormComponent from '../Form/Form.js' 
import './CharacterPage.css'
import { Link } from 'react-router-dom'

// import { useParams } from 'react-router-dom'

const CharacterPage = ({chosenCharacterData, getImagePath}) => {

    let walljumpStatus = ''
    const wallJumpConverter = () => {
            if (chosenCharacterData.walljump === '0') {
                walljumpStatus = 'No'
            } else {
                walljumpStatus = 'Yes'
            }
        }

    wallJumpConverter()

    return (
        <div className='char-data-container'>
        <Link to={`/smashnotes`}>
            <button name="home-button">Home</button>
        </Link>
            <header className='char-header'>
                <h1 name="char-name">{chosenCharacterData.name}</h1>
                <img name='char-image' src={getImagePath}/>
            </header>
            <p name="traits" className="traits">Traits: {chosenCharacterData.guide}</p>
            <p name="tier" className="tier">Tier Position: {chosenCharacterData.tierdata}</p>
            <p name="fall-speed" className="fall-speed">Fall Speed: {chosenCharacterData.fallspeed} fastest</p>
            <p name="weight" className="weight">Weight: {chosenCharacterData.weight} heaviest</p>
            <p name="walljump" className="walljump">Can Walljump: {walljumpStatus}</p>
        </div>
    )
}

export default CharacterPage