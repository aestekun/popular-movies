import Image from 'next/image';

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
};

type MovieCardProps = {
  movie: Movie;
  onClick: () => void;
};

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <div
      onClick={onClick}
      className="border cursor-pointer rounded-xl border-gray-200 flex p-[1px] hover:bg-gray-100"
    >
      <div className="rounded-xl overflow-hidden">
        <Image src={posterUrl} alt={movie.title} width={72} height={108} />
      </div>
      <div className="self-center space-y-2 px-6">
        <h3 className="font-bold text-normal">{movie.title}</h3>
        <p className="flex gap-x-2">
          <Image
            src="/calendar-icon.svg"
            alt="Calendar icon"
            width={16}
            height={16}
          />
          <time>{releaseYear}</time>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
