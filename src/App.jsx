
import SideNav from "./assets/components/sidenav/SideNav"
import TopNav from "./assets/components/topnav/TopNav"
import './App.css'
import Home from "./assets/pages/home/Home"


function App() {

  return (
      <div className="App">
        <TopNav/>
        <div className="container">
          <SideNav/>
          <Home/>
        </div>
      </div>
  )
}

export default App
