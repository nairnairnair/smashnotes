import React from 'react'
import './CharacterPage.css'
// import { useParams } from 'react-router-dom'

const CharacterPage = ({getImagePath}) => {

    // let { id } = useParams();

    // useEffect(() => {
    //     console.log(props)
    // }, [])

    return (
        <div>
            <h1>Name</h1>
            <img src={getImagePath}/>
        </div>
    )
}

export default CharacterPage