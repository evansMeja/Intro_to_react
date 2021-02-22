import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

const App = () => {
  return (
    <div className="App">
      <SearchBar/>
      <CountButton incrementBy={1} buttonColor={"orange"}/>
      <CountButton incrementBy={4} buttonColor={"green"}/>
      <CountButton incrementBy={100} buttonColor={"red"}/>
      <CountButton incrementBy={6} buttonColor={"yellow"}/>
      <CountButton incrementBy={7} buttonColor={"purple"}/>
    </div>
  )
}

export default App;
