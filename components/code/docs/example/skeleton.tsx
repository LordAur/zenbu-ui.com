import { Skeleton } from '@zenbu-ui/skeleton'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewSkeleton = () => {
  return(
    <Example py={5}>
      <Skeleton width="20" mr="2" />
      <Skeleton width="44" mr="2" />
      <Skeleton width="72" />
    </Example>
  )
}

export const PreviewSkeletonColoring = () => {
  return(
    <Example py={5}>
      <Skeleton width="20" color="blue" colorContrast="200" mr="2" />
      <Skeleton width="44" color="blue" colorContrast="200" mr="2" />
      <Skeleton width="72" color="blue" colorContrast="200" />
    </Example>
  )
}

export const PreviewSkeletonCircle = () => {
  return(
    <Example py={5}>
      <Skeleton width="32" circle />
    </Example>
  )
}

export const SkeletonProps = () => {
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
    prop: (<Tag componentName="prop">circle</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">100</Tag>),
    description: <Text componentName="standard">Change the skeleton shape to a circle.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
