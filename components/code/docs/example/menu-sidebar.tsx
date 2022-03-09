/* eslint-disable @next/next/no-img-element */
import { Menu, MenuSidebar } from '@zenbu-ui/menu'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewMenuSidebar = () => {
  return(
    <Example flex={false} py={5} px={0}>
      <div className="w-full relative h-52">
        <MenuSidebar
        color="blue" colorContrast="600"
        itemTextColor="white" itemTextColorHover="white"
        itemBgColorHover="blue" itemBgColorHoverContrast="700"
        logo={(
          <a href="#" className="w-full flex px-3">
            <img src="/logo/white.svg" alt="Logo Kodepanda" width={40} />
          </a>
        )}>
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Item href="#">Features</Menu.Item>
          <Menu.Item href="#">Pricing</Menu.Item>
          <Menu.Item href="#">About</Menu.Item>
        </MenuSidebar>
      </div>
    </Example>
  )
}

export const MenuSidebarProps = () => {
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

  const rows = [{
    prop: (<Tag componentName="prop">collapseButton</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying the collapse button to hide and unhide sidebar menu.</Text>
  }, {
    prop: (<Tag componentName="prop">collapseMini</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">After the collapse button is triggered, the sidebar menu does not hide but will be shrinking.</Text>
  }, {
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
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
