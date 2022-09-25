import React from 'react'
import './CharacterPage.css'
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
        <div>
            <h1>Name</h1>
            <img src={getImagePath}/>
            <p className="traits">Traits: {chosenCharacterData.guide}</p>
            <p className="tier">Tier Position: {chosenCharacterData.tierdata}</p>
            <p className="fall-speed">Fall Speed: {chosenCharacterData.fallspeed}</p>
            <p className="weight">Weight: {chosenCharacterData.weight}</p>
            <p className="walljump">Can Walljump: {walljumpStatus}</p>
        </div>
    )
}

export default CharacterPage