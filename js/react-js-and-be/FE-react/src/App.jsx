import { useState } from 'react'
import UserPage from './page/user'
import Header from './components/layout/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <Header />
      <UserPage/>
    </div>

  )
}

export default App
