import { Box, Image, Text, Heading, Stack } from "@chakra-ui/react";

interface CardProps {
  movie: {
    id: number;
    title: String;
    poster_path: String;
    genre_ids: number[];
    vote_count: number;
    popularity: number;
    release_date: string;
    vote_average: number;
    overview: string;
  };
}

const Card = ({ movie}: CardProps) => {

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title as string}
        objectFit="cover"
        height="350px"
        width="100%"
      />

      <Box p="6">
        <Stack wordSpacing="2px">
          <Heading size="md" color="gray.600" fontWeight="bold">
            {movie.title}
          </Heading>
          <Heading size="sm" color="black" fontWeight="bold">
            Realease-Date: {movie.release_date}
          </Heading>
          <Text fontSize="sm" color="gray.600" fontWeight="bold">
            Rating: {movie.vote_average} | Votes: {movie.vote_count}
          </Text>
          {/* noOfLines={3} Text  */}
          <Text color="black">{movie.overview}</Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;
