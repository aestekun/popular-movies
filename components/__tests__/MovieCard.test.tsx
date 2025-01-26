import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard';
import React from 'react';

const mockMovie = {
  id: 777,
  title: 'Pulp Fiction',
  release_date: '1994-10-14',
  poster_path: '/path/to-poster.jpg',
  overview: 'A story of crime, love, and redemption.',
  vote_average: 8.9,
};

it('renders movie details correctly', () => {
  render(<MovieCard movie={mockMovie} onClick={() => {}} />);

  const movieTitle = screen.getByText(mockMovie.title);
  const moviePoster = screen.getByAltText(mockMovie.title);
  const releaseYear = screen.getByText('1994');

  expect(movieTitle).toBeInTheDocument();
  expect(moviePoster).toBeInTheDocument();
  expect(releaseYear).toBeInTheDocument();
});

it('calls the onClick function when title is clicked', () => {
  const onClickMock = jest.fn();

  render(<MovieCard movie={mockMovie} onClick={onClickMock} />);

  fireEvent.click(screen.getByText(mockMovie.title));

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
