import { List, ListBox } from '@zenbu-ui/list'
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

export const PreviewList = () => {
  return(
    <Example flex={false} py={5}>
      <List
      textColor="slate" textColorContrast="700"
      darkTextColor="slate" darkTextColorContrast="200">
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    </Example>
  )
}

export const PreviewListMarkerColor = () => {
  return(
    <Example flex={false} py={5}>
      <List type="disc"
      textColor="slate" textColorContrast="700"
      darkTextColor="slate" darkTextColorContrast="200"
      listColor="sky" listColorContrast="300">
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    </Example>
  )
}

export const PreviewListType = () => {
  return(
    <Example flex={false} py={5}>
      <List type="roman"
      textColor="slate" textColorContrast="700"
      darkTextColor="slate" darkTextColorContrast="200">
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    </Example>
  )
}

export const PreviewListNested = () => {
  return(
    <Example flex={false} py={5}>
      <List type="decimal"
      textColor="slate" textColorContrast="700"
      darkTextColor="slate" darkTextColorContrast="200"
      space="2">
        <List.Item>Getting Started</List.Item>
        <List.Item>Introduction</List.Item>
        <List.Item>
          Languages
          <List.Nested>
            <List.Item>HTML</List.Item>
            <List.Item>Typescript</List.Item>
            <List.Item>CSS</List.Item>
          </List.Nested>
        </List.Item>
        <List.Item>Review</List.Item>
      </List>
    </Example>
  )
}

export const PreviewListIcon = () => {
  return(
    <Example flex={false} py={5}>
      <List
      textColor="slate" textColorContrast="700"
      darkTextColor="slate" darkTextColorContrast="200">
        <List.Item icon="user-group">Kodepanda Kreasi Media</List.Item>
        <List.Item icon="location-marker">Medan, Indonesia</List.Item>
        <List.Item icon="mail-open">yudha@kodepanda.com</List.Item>
        <List.Item icon="link" link="https://kodepanda.com">kodepanda.com</List.Item>
      </List>
    </Example>
  )
}

export const PreviewListBox = () => {
  return(
    <Example py={5}>
      <ListBox border={false}
      bgActiveColor="blue" bgActiveColorContrast="600"
      textColor="slate" textColorContrast="700"
      textActiveColor="white">
        <ListBox.Item active>
          <div className="flex justify-between">
            <h5>List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p>Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </ListBox.Item>
        <ListBox.Item>
          <div className="flex justify-between">
            <h5>List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p>Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </ListBox.Item>
        <ListBox.Item>
          <div className="flex justify-between">
            <h5>List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p>Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </ListBox.Item>
      </ListBox>
    </Example>
  )
}

export const ListProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">type</Tag>),
    type: (<Tag componentName="type">list style</Tag>),
    default: (<Tag componentName="type">none</Tag>),
    description: <Text componentName="standard">You can set the list-item marker, you set with none, disc, decimal, square, or roman.</Text>
  }, {
    prop: (<Tag componentName="prop">vertical</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard">Set true if you want to display a vertical list.</Text>
  }, {
    prop: (<Tag componentName="prop">horizontal</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to display a horizontal list.</Text>
  }, {
    prop: (<Tag componentName="prop">separator</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to display a list separator.</Text>
  }, {
    prop: (<Tag componentName="prop">iconHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">5</Tag>),
    description: <Text componentName="standard">Read the <Link componentName="standard" href="/docs/sizing">size documentation</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">listColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the list-item marker color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">listColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the list-item marker color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">space</Tag>),
    type: (<Tag componentName="type">space</Tag>),
    default: (<Tag componentName="type">0</Tag>),
    description: <Text componentName="standard">Set a space between list-items, read the <Link componentName="standard" href="/docs/space-between">space between</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const ListItemProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">active</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set list item active, use this for <strong>listbox.item</strong>.</Text>
  }, {
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the list-items.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your list-items component, please read the <Link componentName="standard" href="/docs/icon">icon component</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconSVG</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put the custom icon with svg.</Text>
  }, {
    prop: (<Tag componentName="prop">link</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the URL page.</Text>
  }, {
    prop: (<Tag componentName="prop">target</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">_blank</Tag>),
    description: <Text componentName="standard">Set target with _self, _blank, _parent, or _top.</Text>
  }, {
    prop: (<Tag componentName="prop">header</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying list item header.</Text>
  }, {
    prop: (<Tag componentName="prop">subHeader</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying list item sub-header.</Text>
  }, {
    prop: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the list-items.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const ListBoxProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">vertical</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard">Set true if you want to display a vertical list.</Text>
  }, {
    prop: (<Tag componentName="prop">horizontal</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to display a horizontal list.</Text>
  }, {
    prop: (<Tag componentName="prop">separator</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to display a list separator.</Text>
  }, {
    prop: (<Tag componentName="prop">textActiveColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the list-item text color when the list-items is active, for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">textActiveColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the list-item text color contrast when the list-items is active, for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgActiveColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the list-item background color when the list-items is active, for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgActiveColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the list-item background color contrast when the list-items is active, for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkBgActiveColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dark mode list-item background color when the list-items is active, for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkBgActiveColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dark mode list-item background color contrast when the list-items is active, for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">space</Tag>),
    type: (<Tag componentName="type">space</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set a space between list-items, read the <Link componentName="standard" href="/docs/space-between">space between</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
