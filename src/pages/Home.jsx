import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css'
import { searchMovie, getPoplularMovies } from '../services/api'

function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getPoplularMovies();
                setMovies(data);
            } catch (error) {
                setError(error);
                console.error("Error fetching movies:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovies();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(search);
        setSearch("");
    }

    return (
        <div className="home">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie"
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().includes(search.toLowerCase()) && (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                ))}
            </div>
        </div>
    );
}

export default Home;