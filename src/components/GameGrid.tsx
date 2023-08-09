import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/xgames")
      .then(({ data }) => setGames(data.results))
      .catch((e) => setError(e.message));
  });
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
