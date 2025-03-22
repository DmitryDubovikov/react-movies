import '../css/MovieCard.css'

function MovieCard({ movie }) {

    function handleFavorite(movie) {
        console.log("Favorite movie", movie);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={() => handleFavorite(movie)}>Like
                        👍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;