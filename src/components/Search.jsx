import React, { useState } from 'react'

const Search = ({setSearching}) => {
    const [search, setSearch] = useState()

    const onTextChange = (event) => {
      setSearch(event.target.value)
    }

    const handleSubmit = async (event) => {
      try {
          event.preventDefault()
          if (search) {             
            setSearching(search)
          }
      } catch (error) {
          console.log(error, 'error search')
      }
    }

    return (
      <>
        <form className="d-flex" role="search">
          <input
            onChange={onTextChange}
            className="form-control me-2"
            type="search"
            placeholder="Search your movie..."
            aria-label="Search"
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </>
    );
  };
  
  export default Search;
  