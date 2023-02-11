import React from "react";

const SearchBox = ({searchfild, searchChange}) => {
    return (
      <div className="pa2">
        <input 
         className="bg-lightest-blue pa2 br3"
         type='search'
         placeholder="search robots" 
         onChange ={searchChange}
         />
        </div>
    )
}

export default SearchBox;