import './App.css'
// import Daisynav from './components/Daisynav/Daisynav'
import NavBar from './components/Daisynav/NavBar/NavBar'
import LineChart from './components/LineChart/LineChart'
import Pricemenu from './components/PriceMenu/Pricemenu'

function App() {


  return (
    <>
    <NavBar></NavBar>
      {/* <Daisynav></Daisynav> */}
      <Pricemenu></Pricemenu>
      <LineChart></LineChart>
    </>
  )
}

export default App
