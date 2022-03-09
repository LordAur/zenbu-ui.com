/* eslint-disable @next/next/no-img-element */
import { Menu, MenuDropdown } from '@zenbu-ui/menu'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

const cols = [
  {
    header: (<Text componentName="table-column">Prop</Text>),
    accessor: "prop",
    position: "left"
  },
  {
    header: (<Text componentName="table-column">Type</Text>),
    accessor: "type",
    position: "left"
  },
  {
    header: (<Text componentName="table-column">Default</Text>),
    accessor: "default",
    position: "left"
  },
  {
    header: (<Text componentName="table-column">Description</Text>),
    accessor: "description",
    position: "left"
  }
]

export const PreviewMenu = () => {
  return(
    <Example flex={false} py={5}>
      <Menu
      logo={(
        <a href="#">
          <img src="/logo/black.svg" alt="Logo Kodepanda" width={50} />
        </a>
      )}>
        <Menu.Item href="#">Services</Menu.Item>
        <Menu.Item href="#">Portofolio</Menu.Item>
        <Menu.Item href="#">About</Menu.Item>
        <Menu.Item href="#">Blog</Menu.Item>
        <Menu.Item href="#">Career</Menu.Item>
        <Menu.Item href="#">Contact</Menu.Item>
      </Menu>
    </Example>
  )
}

export const PreviewMenuColoring = () => {
  return(
    <Example flex={false} py={5}>
      <Menu
      color="blue" colorContrast="600"
      itemTextColor="white"
      logo={(
        <a href="#">
          <img src="/logo/white.svg" alt="Logo Kodepanda" width={50} />
        </a>
      )}>
        <Menu.Item href="#">Services</Menu.Item>
        <Menu.Item href="#">Portofolio</Menu.Item>
        <Menu.Item href="#">About</Menu.Item>
        <Menu.Item href="#">Blog</Menu.Item>
        <Menu.Item href="#">Career</Menu.Item>
        <Menu.Item href="#">Contact</Menu.Item>
      </Menu>
    </Example>
  )
}

export const PreviewMenuIcon = () => {
  return(
    <Example flex={false} py={5}>
      <Menu
      logo={(
        <a href="#">
          <img src="/logo/black.svg" alt="Logo Kodepanda" width={50} />
        </a>
      )}>
        <Menu.Item href="#" icon="home">Home</Menu.Item>
        <Menu.Item href="#" icon="light-bulb">Features</Menu.Item>
        <Menu.Item href="#" icon="credit-card">Pricing</Menu.Item>
        <Menu.Item href="#" icon="question-mark-circle">About</Menu.Item>
      </Menu>
    </Example>
  )
}

export const PreviewMenuDropdown = () => {
  return(
    <Example flex={false} py={5}>
      <div className="h-48">
        <Menu
        itemActiveFontWeight="bold">
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Dropdown title="Features">
            <MenuDropdown.Item href="#" target="_blank">Feature 1</MenuDropdown.Item>
            <MenuDropdown.Item href="#">Feature 2</MenuDropdown.Item>
            <MenuDropdown.Item href="#">Feature 3</MenuDropdown.Item>
            <MenuDropdown.Item href="#">Feature 4</MenuDropdown.Item>
          </Menu.Dropdown>
          <Menu.Item href="#">Pricing</Menu.Item>
          <Menu.Item href="#">About</Menu.Item>
        </Menu>
      </div>
    </Example>
  )
}

export const PreviewMenuDropdownMode = () => {
  return(
    <Example flex={false} py={5}>
      <div className="h-48">
        <Menu dropdownMode="hover"
        itemActiveFontWeight="bold">
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Dropdown title="Features">
            <MenuDropdown.Item href="#" target="_blank">Feature 1</MenuDropdown.Item>
            <MenuDropdown.Item href="#">Feature 2</MenuDropdown.Item>
            <MenuDropdown.Item href="#">Feature 3</MenuDropdown.Item>
            <MenuDropdown.Item href="#">Feature 4</MenuDropdown.Item>
          </Menu.Dropdown>
          <Menu.Item href="#">Pricing</Menu.Item>
          <Menu.Item href="#">About</Menu.Item>
        </Menu>
      </div>
    </Example>
  )
}

export const MenuProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">iconOnly</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Just displaying the icon of the menu item.</Text>
  }, {
    prop: (<Tag componentName="prop">fixed</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying the menu with fixed position.</Text>
  }, {
    prop: (<Tag componentName="prop">fixedPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">top</Tag>),
    description: <Text componentName="standard">Displaying the menu with fixed position, set with top or bottom.</Text>
  }, {
    prop: (<Tag componentName="prop">responsive</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">To activate responsive menu following the size screen.</Text>
  }, {
    prop: (<Tag componentName="prop">logo</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the logo.</Text>
  }, {
    prop: (<Tag componentName="prop">logoPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">left</Tag>),
    description: <Text componentName="standard">Set logo position, set with left or right.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">left</Tag>),
    description: <Text componentName="standard">Change the menu item position, you can set with left, right, or center.</Text>
  }, {
    prop: (<Tag componentName="prop">itemRounded</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the menu item rounded, read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemActiveFontWeight</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item font-weight when the menu is active. Read the <Link componentName="standard" href="/docs/font">font</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBorder</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to displaying the menu item border.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBorderHoverWidth</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">normal</Tag>),
    description: <Text componentName="standard">Change the menu item border width when menu item is hovered. Read the <Link componentName="standard" href="/docs/border">border</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBorderHoverStyle</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">solid</Tag>),
    description: <Text componentName="standard">Change the menu item border style when menu item is hovered. Read the <Link componentName="standard" href="/docs/border">border</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBorderHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change color the menu item border when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBorderHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change color contrast the menu item border when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change color the menu item text, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change color contrast the menu item text, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemTextColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change color the menu item text when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemTextColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">700</Tag>),
    description: <Text componentName="standard">Change color contrast the menu item text when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode color the menu item text, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode color contrast the menu item text, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemTextColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode color the menu item text when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemTextColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode color contrast the menu item text when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBgColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item background color, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBgColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item background color contrast, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBgColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item background color when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemBgColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item background color contrast when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemBgColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode the menu item background color, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemBgColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode the menu item background color contrast, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemBgColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode the menu item background color when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkItemBgColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change dark mode the menu item background color contrast when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPX</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: (<Tag componentName="type">5</Tag>),
    description: <Text componentName="standard">Change the menu item padding x axis. Read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPY</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: (<Tag componentName="type">3</Tag>),
    description: <Text componentName="standard">Change the menu item padding y axis. Read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPB</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item bottom padding. Read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPL</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item left padding. Read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPR</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item right padding. Read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPT</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item top padding. Read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const MenuItemProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">active</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if the menu item is active.</Text>
  }, {
    prop: (<Tag componentName="prop">simple</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set to true if you don&rsquo;t want to use background or any style.</Text>
  }, {
    prop: (<Tag componentName="prop">href</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the URL page or anything.</Text>
  }, {
    prop: (<Tag componentName="prop">target</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">_blank</Tag>),
    description: <Text componentName="standard">Set target with _self, _blank, _parent, or _top.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your menu item. Read the <Link componentName="standard" href="/docs/icon">icon</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconHeight</Tag>),
    type: (<Tag componentName="type">sizing</Tag>),
    default: (<Tag componentName="type">4</Tag>),
    description: <Text componentName="standard">Change the icon height. Read the <Link componentName="standard" href="/docs/icon">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item icon color, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item icon color contrast, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the menu item.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const MenuDropdownProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">title</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the menu item text.</Text>
  }, {
    prop: (<Tag componentName="prop">active</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if the menu item is active.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your menu item. Read the <Link componentName="standard" href="/docs/icon">icon</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">4</Tag>),
    description: <Text componentName="standard">Change the icon height. Read the <Link componentName="standard" href="/docs/size">size</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item icon color, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item icon color contrast, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">white</Tag>),
    description: <Text componentName="standard">Change the background color of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the background color contrast of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode background color of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode background color contrast of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">blue</Tag>),
    description: <Text componentName="standard">Change the background color of the menu dropdown item when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBgHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the background color contrast of the menu dropdown item when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode background color of the menu dropdown item when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownBgHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode background color contrast of the menu dropdown item when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">black</Tag>),
    description: <Text componentName="standard">Change the text color of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the text color contrast of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">white</Tag>),
    description: <Text componentName="standard">Change the dark mode text color of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode text color contrast of the menu dropdown. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">white</Tag>),
    description: <Text componentName="standard">Change the text color of the menu dropdown when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the text color contrast of the menu dropdown when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextHoverColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode text color of the menu dropdown when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextHoverColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode text color contrast of the menu dropdown when hovered. Read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownFontSize</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">sm</Tag>),
    description: <Text componentName="standard">Change the font-size of the menu item. Read the <Link componentName="standard" href="/docs/font">font</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBorder</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard">Set true to displaying the menu dropdown border.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBorderColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change color the menu dropdown border, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownBorderColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">100</Tag>),
    description: <Text componentName="standard">Change color contrast the menu dropdown border, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownRounded</Tag>),
    type: (<Tag componentName="type">rounded</Tag>),
    default: (<Tag componentName="type">md</Tag>),
    description: <Text componentName="standard">Set the menu dropdown rounded, read the <Link componentName="standard" href="/docs/rounded">rounded</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownIconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the icon height. Read the <Link componentName="standard" href="/docs/size">size</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadow</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">lg</Tag>),
    description: <Text componentName="standard">Set the shadow of the menu dropdown. Read the <Link componentName="standard" href="/docs/shadow">shadow</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadowColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change color the menu dropdown shadow, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadowColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">100</Tag>),
    description: <Text componentName="standard">Change color contrast the menu dropdown shadow, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownShadowOpacity</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the opacity shadow of the menu dropdown. Read the <Link componentName="standard" href="/docs/shadow">shadow</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownMX</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item margin x axis. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownMY</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item margin y axis. Read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownMB</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item bottom margin. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownML</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item left margin. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownMR</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item right margin. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownMT</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item top margin. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownItemPX</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu dropdown item padding x axis. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownItemPY</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu dropdown item padding y axis. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownItemPB</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu dropdown item bottom padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownItemPL</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu dropdown item left padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownItemPR</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu dropdown item right padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownItemPT</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu dropdown item top padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
