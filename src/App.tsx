import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show
} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformMenu from "./components/PlatformMenu";
import SortMenu from "./components/SortMenu";
import GameQueryStore from "./store";



function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const { gameQuery, setGenreId, setPlatformId, setSearchText, setSortOrder } = GameQueryStore();


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading/>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformMenu/>
            </Box>
            <SortMenu/>
          </Flex>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}
export default App;
