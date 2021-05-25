function submitData(name, email) {
    return fetch( 'http://localhost:3000/users', { 
    // Don't forget the return!
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        })
        // Cannot be separate declarations I guess because 'name' is deprecated? IDK
    })
    .then( function (response) { 
        return response.json()
    } )
    // function MUST be declared, but then you can name it callbackFunc if only to explain what it is
    .then( function ( object ) {
        // looking for the data from POST along with new id
        document.body.innerHTML = object[ "id" ]
        // The 'object' in the arg refers to the object in the doc/body/html assignment, not the general ... thingie. 
    })
    .catch( function ( error ) {
        document.body.innerHTML = error.message
    })
    // error-handling code
};

