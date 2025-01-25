'use client';
import { useState } from 'react';
import MovieCard, { Movie } from './MovieCard';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import MovieDetails from './MovieDetails';

type MovieListProps = {
  header: string;
  movies: Movie[];
};

const MovieList = ({ header, movies }: MovieListProps) => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const handleMovieClick = (movieId: number) => {
    setSelectedMovieId(movieId);
  };

  const closeModal = () => {
    setSelectedMovieId(null);
  };

  return (
    <>
      <Dialog open={selectedMovieId !== null} onClose={closeModal}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-white/80 backdrop-blur-[6px] duration-200 ease-out data-[closed]:opacity-0"
        />
        <DialogPanel className="fixed top-1/4 left-10 right-10 lg:top-1/4 lg:left-1/4 lg:right-1/4">
          {selectedMovieId && (
            <MovieDetails movieId={selectedMovieId} onClose={closeModal} />
          )}
        </DialogPanel>
      </Dialog>

      <div>
        <h2 className="font-bold mb-8">{header}</h2>
        <ul className="space-y-2">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard
                movie={movie}
                onClick={() => handleMovieClick(movie.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
