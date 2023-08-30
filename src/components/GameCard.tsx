import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./Score";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={"games/" + game.slug}>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconsList
              platform={game.parent_platforms && game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

export default GameCard;
