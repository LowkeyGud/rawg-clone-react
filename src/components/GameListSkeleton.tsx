import {
    HStack,
    List,
    Skeleton
} from "@chakra-ui/react";

const GameListSkeleton = () => {
  return (
    <List>
      <HStack marginY="10px">
        <Skeleton boxSize="37px" borderRadius={8} />
        <Skeleton boxSize="37px" width="100%" />
      </HStack>
    </List>
  );
};

export default GameListSkeleton;
