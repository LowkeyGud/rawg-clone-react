import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform, { Platform } from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onPlatformSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformMenu = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
