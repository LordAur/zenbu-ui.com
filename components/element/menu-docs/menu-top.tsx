/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Flexbox } from '@zenbu-ui/flexbox'
import { Icon } from '@zenbu-ui/icon'
import { Menu } from '@zenbu-ui/menu'
import { Text } from '@zenbu-ui/typography'
import { darkMode, toggleDarkMode } from '../../../pages/_app'

export const MenuTop = () => {
  return(
    <Menu
    width="full" fixed
    color="slate" colorContrast="50"
    darkColor="slate" darkColorContrast="700"
    itemPosition="right"
    itemPX="4"
    itemTextColor="slate" itemTextColorContrast="700"
    itemTextColorHover="slate" itemTextColorHoverContrast="900"
    darkItemTextColor="slate" darkItemTextColorContrast="100" darkItemTextColorHover="slate" darkItemTextColorHoverContrast="300"
    borderPosition="bottom" borderColor="slate" borderColorContrast="200" darkBorderColor="slate" darkBorderColorContrast="600"
    logo={(
      <a href="/">
        <Flexbox gap="2" mt="-1" alignItems="center">
          <img src={darkMode ? "/logo/white.svg" : "/logo/black.svg"} alt="Logo Kodepanda" className="w-10" />
          <Text fontSize="base" fontWeight="bold" mt="0.5" color="slate" colorContrast="800" lg={{fontSize: "lg"}}>Zenbu UI</Text>
        </Flexbox>
      </a>
    )}>
      <Menu.Content position="right">
        <Menu.Item href="https://github.com/KodepandaID/zenbu-ui">Github</Menu.Item>
        <Menu.Item href="https://opencollective.com/zenbu-ui">Donate</Menu.Item>
        <Menu.Item
        onClick={() => toggleDarkMode()}>
          <Icon icon={darkMode ? "light-bulb" : "moon"}
          color="slate" colorContrast="700"
          darkColor="white" height="4" mt="-1" />
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
