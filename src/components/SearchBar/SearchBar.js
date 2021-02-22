
import React, {useState} from "react"


const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState("")

    const handleInputChanged = (e) =>{
        setSearchValue(e.target.value)
    }
    return (
    <div>
        <input type="text" value="evans" onChange={handleInputChanged} placeholder="start search here" value={searchValue}/>
        <br/>
        {searchValue}
    </div>
    )
}

export default SearchBar;
