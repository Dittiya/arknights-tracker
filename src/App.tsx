import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <h1>Website</h1>
      </div>
      <h1></h1>
      <div className="card">
      </div>
      <Link to={"history"}>History</Link>
      <footer>v0.1.0</footer>
    </>
  )
}

export default App
