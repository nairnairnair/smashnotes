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
        <Link to={`/`}>
            <button>Home</button>
        </Link>
            <header className='char-header'>
                <h1>{chosenCharacterData.name}</h1>
                <img src={getImagePath}/>
            </header>
            <p className="traits">Traits: {chosenCharacterData.guide}</p>
            <p className="tier">Tier Position: {chosenCharacterData.tierdata}</p>
            <p className="fall-speed">Fall Speed: {chosenCharacterData.fallspeed} fastest</p>
            <p className="weight">Weight: {chosenCharacterData.weight} heaviest</p>
            <p className="walljump">Can Walljump: {walljumpStatus}</p>
        </div>
    )
}

export default CharacterPage