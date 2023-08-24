import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import useFindPlatform from "../hooks/useFindPlatform";

interface Props {
  onPlatformSelect: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformMenu = ({ onPlatformSelect, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
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
