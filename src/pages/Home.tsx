import { Box, Grid, GridItem } from "@chakra-ui/react"

// Components import
import { Genres } from "@/components/HomeComponents/Genres"

// CSS import
import './Home.modules.css'

export const Home = () => {
  return (
    <div>
        <Grid templateColumns="0.2fr 2fr 0.5fr" gap={6}>
            <Box bg="tomato" height="60px" >Logo</Box>
            <Box bg="blue" height="60px" gridColumn="span 1" >Search Tab</Box>
            <Box bg="green" height="60px" >Mode</Box>
        </Grid>
        <Grid
            h="100vh"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            marginTop="20px"
        >
            <GridItem bg="tomato" height="auto" rowSpan={4} colSpan={1}><Genres/></GridItem>
            <GridItem bg="yellow" height="100px" rowSpan={1} colSpan={1}>Name of Genres</GridItem>
            <GridItem bg="pink" height="70px" rowStart={2} colStart={2} rowSpan={1} colSpan={2}>Platform and order by</GridItem>
            <GridItem bg="grey" rowStart={3} colStart={2} rowSpan={2} colSpan={4}></GridItem>
        </Grid>
    </div>
  )
}
