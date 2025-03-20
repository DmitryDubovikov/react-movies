import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MovieCard movie={{ title: "The Dark Knight", url: "https://via.placeholder.com/150", releaseYear: 2008 }} />
      <MovieCard movie={{ title: "Inception", url: "https://via.placeholder.com/150", releaseYear: 2010 }} />
    </div>
  )
}

export default App
