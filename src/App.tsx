import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  useStatStyles,
} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformMenu from "./components/PlatformMenu";
import { Game, Platform } from "./hooks/useGames";
import SortMenu from "./components/SortMenu";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <NavBar
          onSearch={(st) => setGameQuery({ ...gameQuery, searchText: st })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformMenu
                selectedPlatform={gameQuery.platform}
                onPlatformSelect={(p) =>
                  setGameQuery({ ...gameQuery, platform: p })
                }
              />
            </Box>
            <SortMenu
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(s) =>
                setGameQuery({ ...gameQuery, sortOrder: s })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
