
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideNav from "./assets/components/sidenav/SideNav"
import TopNav from "./assets/components/topnav/TopNav"
import './App.css'
import Home from "./assets/pages/home/Home"
import UserList from "./assets/pages/userlist/UserList"
// import { Diversity1 } from "@mui/icons-material"


function App() {

  return (
      <BrowserRouter>
        <TopNav/> 
        <div className="container">
          <SideNav/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/userlist" element={<UserList/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App

