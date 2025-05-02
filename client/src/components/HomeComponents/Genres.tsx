import { JSX, useEffect, useState } from "react";

// Libraries
import { Tabs } from "@chakra-ui/react";
import {
  FcClapperboard,
  FcPortraitMode,
  FcMusic,
  FcFilmReel,
  FcVoicePresentation,
  FcSportsMode,
  FcHome,
  FcNightPortrait,
  FcCollaboration,
  FcTimeline,
  FcIdea,
  FcInspection,
  FcLike,
  FcDocument,
  FcCamera,
  FcMindMap,
} from "react-icons/fc";

// Components import
import Genre from "../../types/genre";

// Get Genres from
import { getGenres } from "../../services/movieService";
// import { GenreName } from "./GenreName";

interface GenresProps {
  setNameOfGenre: (value: string) => void;
  // setGenreId: React.Dispatch<React.SetStateAction<number[]>>;
  setGenreId: (value: number) => void;
  genreId?: number;
}

//genreId

export const Genres = (props: GenresProps) => {
  // const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [genres] = await Promise.all([getGenres()]);
        setGenres(genres);
      } catch (err) {
        setGenres([]);
        throw(err);
      }
    };

    fetchData();
  }, []);

  const genreIcons: Record<string, JSX.Element> = {
    Comedy: <FcClapperboard />,
    Crime: <FcInspection />,
    Documentary: <FcDocument />,
    Drama: <FcPortraitMode />,
    Family: <FcHome />,
    Fantasy: <FcIdea />,
    History: <FcTimeline />,
    Horror: <FcNightPortrait />,
    Music: <FcMusic />,
    Mystery: <FcMindMap />,
    Romance: <FcLike />,
    "Science Fiction": <FcCamera />,
    "TV Movie": <FcFilmReel />,
    Thriller: <FcVoicePresentation />,
    War: <FcCollaboration />,
    Western: <FcSportsMode />,
  };

  function getGenreDetails(name: string, id: number) {
    props.setNameOfGenre(name);
    props.setGenreId(id);
  }

  return (
    <Tabs.Root defaultValue={genres[0]?.name} orientation="vertical">
      <Tabs.List>
        {genres.map((genre) => (
          <Tabs.Trigger
            key={genre.id}
            value={genre.name}
            onClick={() => getGenreDetails(genre.name, genre.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 data-[state=active]:bg-blue-200 transition-colors"
          >
            {genreIcons[genre.name] || <FcClapperboard />} {genre.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};
