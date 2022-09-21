const getSingleCharacterData = (id) => {
    return fetch(`http://smashlounge.com/api/chars/${id}`)
            .then(rsp => {
                if (!rsp.ok) {
                  throw new Error('Unable to access the server.  Please try again!')
                } else {
                    return rsp.json()
                    }           
                })
            .then()
}

export default getSingleCharacterData