'use client';
import MovieCard, { Movie } from './MovieCard';

export type Movies = {
  header: string;
  movies: Movie[];
};
const MovieList = ({ header, movies }: Movies) => {
  return (
    <>
      <h2 className="font-bold">{header}</h2>
      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
