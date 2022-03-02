import { Icon } from '@zenbu-ui/icon'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewIcon = () => {
  return(
    <Example py={5} gap={3}>
      <Icon icon="academic-cap" color="blue" colorContrast="600" />
      <Icon icon="academic-cap-solid" color="blue" colorContrast="600" />
    </Example>
  )
}

export const IconProps = () => {
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
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Search icon name on <Link componentName="standard" href="https://heroicons.com">Heroicons</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">hight</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">12</Tag>),
    description: <Text componentName="standard">Read the <Link componentName="standard" href="/docs/sizing">size documentation</Link>.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
