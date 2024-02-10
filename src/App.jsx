import Data from "./assets/cars.json";
import './App.css'
import Cars from "./Cars.jsx"

function App() {

  return (
    <>
      <h1 className="cars-title">About All Cars </h1> 
      <Cars key="qwert" data={Data}/>
    </>
  )
}

export default App
