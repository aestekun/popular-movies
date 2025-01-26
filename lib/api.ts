import { Movie } from '@/components/MovieCard';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(): Promise<Movie[]> {
  if (!API_KEY) {
    throw new Error(
      'TMDB API key is missing. Set NEXT_PUBLIC_TMDB_API_KEY in env'
    );
  }
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch movies: ${response.status} - ${errorText}`
      );
    }

    const data: MovieApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

export async function fetchMovieDetails(movieId: number): Promise<Movie> {
  if (!API_KEY) {
    throw new Error(
      'TMDB API key is missing. Set NEXT_PUBLIC_TMDB_API_KEY in env'
    );
  }
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch movie details: ${response.status} - ${errorText}`
      );
    }

    const data: Movie = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}
