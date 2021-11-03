import React from "react";

const Search = ( { handleChange } ) => {

    return(
        <>
        <input type="text" placeholder="Pesquisar" onChange={handleChange} />
        </>
    )
}

export default Search;