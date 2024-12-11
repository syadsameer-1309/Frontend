import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Landing from "./Landing"
import { useState } from "react"


function App() {

  const [user, setUser] = useState([{ username: "john", password: "123" }])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={user}/>}></Route>
          <Route path="/signup" element={<Signup users={user} setUsers={setUser}/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
