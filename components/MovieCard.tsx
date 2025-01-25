import Image from 'next/image';

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <div className="border rounded-xl border-gray-200 flex p-[1px] hover:bg-gray-200">
      <div className="rounded-xl overflow-hidden">
        <Image src={imageUrl} alt={movie.title} width={72} height={108} />
      </div>
      <div className="self-center space-y-2 px-6">
        <h3 className="font-bold text-normal">{movie.title}</h3>
        <p>{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
