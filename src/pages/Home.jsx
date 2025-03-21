import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [search, setSearch] = useState("");

    const movies = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            url: "https://en.wikipedia.org/wiki/File:ShawshankRedemptionMoviePoster.jpg",
            releaseDate: "1994",
        },
        {
            id: 2,
            title: "The Godfather",
            url: "https://en.wikipedia.org/wiki/File:ShawshankRedemptionMoviePoster.jpg",
            releaseDate: "1995",
        },
        {
            id: 3,
            title: "The Dark Knight",
            url: "https://en.wikipedia.org/wiki/File:ShawshankRedemptionMoviePoster.jpg",
            releaseDate: "1996",
        },

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(search);
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