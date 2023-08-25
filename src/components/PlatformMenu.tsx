import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFindPlatform from "../hooks/useFindPlatform";
import usePlatform from "../hooks/usePlatform";
import GameQueryStore from "../store";


const PlatformMenu = () => {
  const { data, error } = usePlatform();
  const setPlatformId = GameQueryStore(s => s.setPlatformId)
  const selectedPlatformId = GameQueryStore(s => s.gameQuery.platformId)
  const platform = useFindPlatform(selectedPlatformId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
