import {
    Card,
    Flex,
    GridItem,
    SimpleGrid,
    Skeleton
} from "@chakra-ui/react";

const GameDetailSkeleton = () => {
  return (
    <Card>
      {/* Mobile: 1 column and for greater than laptop sizes: 2 column */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
        <GridItem>
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem>
          <Flex wrap="wrap">
            <Skeleton
              height={{ base: "15rem", md: "250px" }}
              width={{ base: "100%", md: "48%" }}
              m={1}
            />
            <Skeleton
              height={{ base: "13rem", md: "250px" }}
              width={{ base: "100%", md: "48%" }}
              m={1}
            />
            <Skeleton
              height={{ base: "15rem", md: "250px" }}
              width={{ base: "100%", md: "48%" }}
              m={1}
            />
            <Skeleton
              height={{ base: "15rem", md: "250px" }}
              width={{ base: "100%", md: "48%" }}
              m={1}
            />
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
};

export default GameDetailSkeleton;
