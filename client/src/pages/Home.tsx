import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";

// Components
import { Genres } from "../components/HomeComponents/Genres";
import { Mode } from "@/components/HomeComponents/Mode";
import { Logo } from "../components/HomeComponents/Logo";
import { GenreName } from "../components/HomeComponents/GenreName";
import { SearchBar } from "../components/HomeComponents/SearchBar";
import { Movies } from "../components/HomeComponents/Movies";
import { OrderBy } from "../components/HomeComponents/OrderBy";

// CSS import
import "./Home.modules.css";

export const Home = () => {
  const [nameOfGenre, setNameOfGenre] = useState<string>("");
  const [genreId, setGenreId] = useState<number>(0);
  const [orderOption, setOrderOption] = useState<string[]>([]);
  const [optionAsString, setOptionAsString] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    const newValue = orderOption[0];
    if (typeof newValue === "string") {
      setOptionAsString(newValue);
    }
  }, [orderOption]);

  return (
    <div>
      <Grid templateColumns="0.2fr 2fr 0.5fr" gap={6}>
        <Box height="60px">
          <Logo />
        </Box>
        <Box height="60px" gridColumn="span 1" className="searchBar">
          <SearchBar setUserInput={setUserInput} />
        </Box>
        <Box height="60px">
          <Mode />
        </Box>
      </Grid>
      <Grid
        h="100vh"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        marginTop="20px"
      >
        <GridItem height="750px" rowSpan={4} colStart={1}>
          <h1>Genres</h1>
          <Genres setNameOfGenre={setNameOfGenre} setGenreId={setGenreId} />
        </GridItem>
        <GridItem
          height="100px"
          rowSpan={1}
          colSpan={1}
          className="genre-name-container"
        >
          <GenreName name={nameOfGenre} />
        </GridItem>
        <GridItem
          height="70px"
          rowStart={2}
          colStart={2}
          rowSpan={1}
          colSpan={2}
          className="order-by-container"
        >
          <OrderBy setOrderOption={setOrderOption} />
        </GridItem>
        <GridItem
          rowStart={3}
          colStart={2}
          rowSpan={2}
          colSpan={4}
          className="movies-info"
        >
          <Movies genreId={genreId} optionAsString={optionAsString} userInput={userInput}/>
        </GridItem>
      </Grid>
    </div>
  );
};
