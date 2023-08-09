import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="5px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconsList platform={game.parent_platforms.map(p => p.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
