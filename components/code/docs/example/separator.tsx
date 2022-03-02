import { Separator } from '@zenbu-ui/separator'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Header, Text, Link } from '@zenbu-ui/typography'

export const PreviewSeparator = () => {
  return(
    <Example flex={false} py={8}>
      <Header as="h5"
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200">Title was Here</Header>
      <Separator
      borderColor="slate" borderColorContrast="700"
      darkBorderColor="slate" darkBorderColorContrast="200" />
    </Example>
  )
}

export const PreviewSeparatorColoring = () => {
  return(
    <Example flex={false} py={8}>
      <Header as="h5"
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200">Title was Here</Header>
      <Separator borderColor="blue" borderColorContrast="700" />
    </Example>
  )
}

export const PreviewSeparatorStyle = () => {
  return(
    <Example flex={false} py={8}>
      <Header as="h5"
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200">Title was Here</Header>
      <Separator borderWidth="2" borderStyle="dashed"
      borderColor="slate" borderColorContrast="700"
      darkBorderColor="slate" darkBorderColorContrast="200" />
    </Example>
  )
}

export const PreviewSeparatorText = () => {
  return(
    <Example flex={false} py={8}>
      <Separator
      text={(
        <Header as="h5"
        color="slate" colorContrast="700"
        darkColor="slate" darkColorContrast="200">Title was Here</Header>
      )}
      borderColor="slate" borderColorContrast="700"
      darkBorderColor="slate" darkBorderColorContrast="200" />
    </Example>
  )
}

export const SeparatorProps = () => {
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
    prop: (<Tag componentName="prop">text</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying a text between separator.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
