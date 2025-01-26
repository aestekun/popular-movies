import { useEffect, useState } from 'react';
import { Movie } from './MovieCard';
import { fetchMovieDetails } from '@/lib/api';
import Image from 'next/image';

interface MovieDetailsProps {
  movieId: number;
  onClose: () => void;
}

const MovieDetails = ({ movieId, onClose }: MovieDetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError('Failed to fetch movie details');
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  const posterUrl = movieDetails?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    : '/poster-placeholder.svg';

  const releaseYear = movieDetails?.release_date
    ? new Date(movieDetails.release_date).getFullYear()
    : 'Date unknown';

  return (
    <div className="bg-white border rounded-xl border-gray-200 flex flex-col sm:flex-row p-4 sm:p-8">
      <button
        className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5"
        onClick={onClose}
      >
        <Image src="/close-icon.svg" alt="close icon" width={20} height={20} />
      </button>

      {isLoading ? (
        <div className="text-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : error ? (
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <div className="rounded-xl overflow-hidden max-h-48 mb-4 sm:mb-0 max-w-fit sm:max-w-max sm:shrink-0">
            <Image
              src={posterUrl}
              alt={movieDetails?.title as string}
              width={128}
              height={192}
            />
          </div>
          <div className="self-center space-y-2 sm:px-6 max-h-[46vh] sm:max-h-max overflow-auto">
            <h3 className="font-bold text-2xl">
              {movieDetails?.title} ★ {movieDetails?.vote_average.toFixed(1)}
            </h3>
            <div className="flex gap-x-2">
              <Image
                src="/calendar-icon.svg"
                alt="Calendar icon"
                width={16}
                height={16}
              />
              <time>{releaseYear}</time>
            </div>
            <p className="text-sm">{movieDetails?.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
