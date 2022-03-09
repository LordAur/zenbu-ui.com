import { Menu, MenuFooter } from '@zenbu-ui/menu'
import { Image } from '@zenbu-ui/image'
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

export const PreviewMenuFooter = () => {
  return(
    <Example flex={false} py={5}>
      <MenuFooter border={false}
      itemTextColor="gray" itemTextColorContrast="600"
      itemTextColorHover="blue" itemTextColorHoverContrast="600"
      px="16">
        <MenuFooter.Content width="72">
          <div className="flex flex-col space-y-3">
            <Image alt="logo kodepanda" src="/logo/black.svg" width="10" />
            <Text fontSize="sm" color="gray" colorContrast="600" darkColor="gray" darkColorContrast="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </div>
        </MenuFooter.Content>
        <Menu.Items title={(
          <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Menu</Text>
        )}>
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Item href="#">Services</Menu.Item>
          <Menu.Item href="#">Features</Menu.Item>
          <Menu.Item href="#">Pricing</Menu.Item>
          <Menu.Item href="#">Blog</Menu.Item>
        </Menu.Items>
      </MenuFooter>
    </Example>
  )
}

export const PreviewMenuFooterColoring = () => {
  return(
    <Example flex={false} py={5}>
      <MenuFooter border={false}
      color="gray" colorContrast="700"
      itemTextColor="white"
      itemTextColorHover="blue" itemTextColorHoverContrast="600"
      px="16">
        <MenuFooter.Content width="72">
          <div className="flex flex-col space-y-3">
            <Image alt="logo kodepanda" src="/logo/white.svg" width="10" />
            <Text fontSize="sm" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </div>
        </MenuFooter.Content>
        <Menu.Items title={(
          <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Menu</Text>
        )}>
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Item href="#">Services</Menu.Item>
          <Menu.Item href="#">Features</Menu.Item>
          <Menu.Item href="#">Pricing</Menu.Item>
          <Menu.Item href="#">Blog</Menu.Item>
        </Menu.Items>
      </MenuFooter>
    </Example>
  )
}

export const PreviewMenuFooterSmall = () => {
  return(
    <Example flex={false} py={5}>
      <MenuFooter border={false}
      itemTextColor="gray" itemTextColorContrast="600"
      itemTextColorHover="blue" itemTextColorHoverContrast="600"
      footer={(
        <div className="w-full bg-gray-700 px-5 py-1">
          <p className="text-white text-xs font-normal text-center">©2022 Kodepanda Kreasi Media</p>
        </div>
      )}
      px="16">
        <MenuFooter.Content width="72">
          <div className="flex flex-col space-y-3">
            <Image alt="logo kodepanda" src="/logo/black.svg" width="10" />
            <Text fontSize="sm" color="gray" colorContrast="600" darkColor="gray" darkColorContrast="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </div>
        </MenuFooter.Content>
        <Menu.Items title={(
          <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Menu</Text>
        )}>
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Item href="#">Services</Menu.Item>
          <Menu.Item href="#">Features</Menu.Item>
          <Menu.Item href="#">Pricing</Menu.Item>
          <Menu.Item href="#">Blog</Menu.Item>
        </Menu.Items>
      </MenuFooter>
    </Example>
  )
}

export const MenuFooterProps = () => {
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
    prop: (<Tag componentName="prop">footer</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the small menu at the bottom.</Text>
  },{
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
    type: (<Tag componentName="type">rounded</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the menu item rounded, read the <Link componentName="standard" href="/docs/rounded">rounded</Link> documentation.</Text>
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
    type: (<Tag componentName="type">spacing</Tag>),
    default: (<Tag componentName="type">5</Tag>),
    description: <Text componentName="standard">Change the menu item padding x axis. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPY</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: (<Tag componentName="type">3</Tag>),
    description: <Text componentName="standard">Change the menu item padding y axis. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPB</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item bottom padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPL</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item left padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPR</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item right padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">itemPT</Tag>),
    type: (<Tag componentName="type">spacing</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the menu item top padding. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">spaceX</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">24</Tag>),
    description: <Text componentName="standard">Change the menu item x axis spacing. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">spaceY</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">24</Tag>),
    description: <Text componentName="standard">Change the menu item y axis spacing. Read the <Link componentName="standard" href="/docs/spacing">spacing</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
