import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      {games.map((g) => (
        <ul key={g.id}>{g.name}</ul>
      ))}
    </div>
  );
};

export default GameGrid;
