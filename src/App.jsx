
import SideNav from "./assets/components/sidenav/SideNav"
import TopNav from "./assets/components/topnav/TopNav"
import './App.css'


function App() {

  return (
      <div className="App">
        <TopNav/>
        <div className="container">
          <SideNav/>
        </div>
      </div>
  )
}

export default App
