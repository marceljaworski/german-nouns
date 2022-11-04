import {useState, useEffect} from 'react'
import './App.scss'
import axios from 'axios';
const nounsUrl = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
  const [nouns, setNouns] = useState([]);
  useEffect(() => {
    const response = axios.get(nounsUrl)

  },[]);

  return (
    <div className="App">
      <h1>German Noun Site </h1>
      <p>There are {nouns.length} npuns.</p>


      
      
    </div>
  )
}

export default App
