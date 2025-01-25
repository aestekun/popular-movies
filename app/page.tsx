import MovieList from '@/components/MoveList';
import { fetchMovies } from '@/lib/api';
import Image from 'next/image';

export default async function Home() {
  const movies = await fetchMovies();
  return (
    <div className="mx-auto w-full md:w-1/2 lg:w-[480px] p-8 md:p-0">
      <main className="py-8">
        <header className="flex justify-center mb-8">
          <Image
            src="/film-icon.svg"
            alt="Film icon"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-5xl font-normal">movies</h1>
        </header>
        <MovieList header="Most popular" movies={movies} />
      </main>
    </div>
  );
}
export const metadata = {
  title: 'Popular Movies 🎥',
};
export const revalidate = 3600; // re-generate page each 1 hour
