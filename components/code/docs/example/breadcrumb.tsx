import { Breadcrumb } from '@zenbu-ui/breadcrumb'
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

export const PreviewBreadcrumb = () => {
  return(
    <Example py={5}>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </Example>
  )
}

export const BreadcrumbProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">dividerIcon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: (<Tag componentName="type">chevron-right-solid</Tag>),
    description: <Text componentName="standard">You can customize the divider icon, please read the <Link componentName="standard" href="/docs/icon">icon component</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">dividerHeight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">3</Tag>),
    description: <Text componentName="standard">Read the <Link componentName="standard" href="/docs/sizing">size documentation</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">activeColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the color active breadcrumb item for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">activeColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the color contrast active breadcrumb item for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkActiveColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the dark mode color active breadcrumb item for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkActiveColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the dark mode color contrast active breadcrumb item for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const BreadcrumbItemProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">active</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set to true if you want to set the item as an active breadcrumb.</Text>
  }, {
    prop: (<Tag componentName="prop">href</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the URL page.</Text>
  }, {
    prop: (<Tag componentName="prop">target</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">_blank</Tag>),
    description: <Text componentName="standard">Set target with _self, _blank, _parent, or _top.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
