import { useState, useEffect, useMemo } from "react";
import Movie from "../../types/movie";
import { getMovies } from "../../services/movieService";
import { SimpleGrid, Text } from "@chakra-ui/react";
import "../../styles/movies.css";
import Card from "./Card";

interface MovieProp {
  genreId: number;
  optionAsString: string;
  userInput: string;
}

export const Movies = ({ genreId, optionAsString, userInput }: MovieProp) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
        setMovies([]);
      }
    };
    fetchData();
  }, []);

  // Memoized sorted movies with user input filter
  const sortedMovies = useMemo(() => {
    const lowerCaseInput = userInput.trim().toLowerCase();
    let filteredMovies = movies;

    if (genreId !== 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre_ids.includes(genreId)
      );
    }

    // Apply user input filter
    filteredMovies = filteredMovies.filter((movie) =>
      lowerCaseInput
        ? movie.title.toLowerCase().includes(lowerCaseInput)
        : true
    );

    // Sort movies
    return filteredMovies.sort((a, b) => {
      if (optionAsString === "Name" || optionAsString === "") {
        // Default to Name sorting when optionAsString is empty
        return a.title.localeCompare(b.title, undefined, {
          sensitivity: "base",
        });
      } else if (optionAsString === "Date") {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        if (isNaN(dateA.getTime())) return isNaN(dateB.getTime()) ? 0 : 1;
        if (isNaN(dateB.getTime())) return -1;
        return dateA.getTime() - dateB.getTime();
      }
      return 0;
    });
  }, [movies, genreId, userInput, optionAsString]);

  return (
    <div className="cards">
      <SimpleGrid columns={[1, 2, 3, 4]} >
        {sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))
        ) : (
          <Text>No movies found matching the criteria.</Text>
        )}
      </SimpleGrid>
    </div>
  );
};