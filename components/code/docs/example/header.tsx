import { Text, Header, Link } from '@zenbu-ui/typography'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'

export const PreviewHeader = () => {
  return(
    <Example flex={false} py={5}>
      <div className="flex flex-col gap-4">
        <Header componentName="standard" as="h1">Header 1</Header>
        <Header componentName="standard" as="h2">Header 2</Header>
        <Header componentName="standard" as="h3">Header 3</Header>
        <Header componentName="standard" as="h4">Header 4</Header>
        <Header componentName="standard" as="h5">Header 5</Header>
        <Header componentName="standard" as="h6">Header 6</Header>
      </div>
    </Example>
  )
}

export const PreviewHeaderEllipsis = () => {
  return(
    <Example py={5}>
      <div className="w-96">
        <Header componentName="standard" as="h4" ellipsis>The quick brown fox jumps over the lazy dog.</Header>
      </div>
    </Example>
  )
}

export const PreviewHeaderTransform = () => {
  return(
    <Example flex={false} py={5}>
      <div className="flex flex-col gap-4">
        <Header componentName="standard" as="h4" uppercase>The quick brown fox jumps over the lazy dog.</Header>
        <Header componentName="standard" as="h4" lowercase>The quick brown fox jumps over the lazy dog.</Header>
        <Header componentName="standard" as="h4" capitalize>The quick brown fox jumps over the lazy dog.</Header>
      </div>
    </Example>
  )
}

export const PreviewHeaderMarker = () => {
  return(
    <Example py={5}>
      <div className="w-96">
        <Header componentName="standard" as="h4">
          When you look
          <Header as="h4" marker color="white" markerColor="pink" markerColorContrast="500">annoyed</Header>
          all the time, people think that you&rsquo;re busy
        </Header>
      </div>
    </Example>
  )
}

export const PreviewHeaderMarkerRotate = () => {
  return(
    <Example py={5}>
      <div className="w-96">
        <Header componentName="standard" as="h4">
          When you look
          <Header as="h4" marker markerRotate="-3"
          color="white" markerColor="pink" markerColorContrast="500">annoyed</Header>
          all the time, people think that you&rsquo;re busy
        </Header>
      </div>
    </Example>
  )
}

export const HeaderProps = () => {
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
    prop: (<Tag componentName="prop">as</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">h1</Tag>),
    description: <Text componentName="standard">Set the header level, set with h1, h2, h3, h4, h5, or h6.</Text>
  }, {
    prop: (<Tag componentName="prop">marker</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying a marker on your text header.</Text>
  }, {
    prop: (<Tag componentName="prop">markerColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the header marker color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">markerColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the header marker color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">uppercase</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Transforming text to uppercase.</Text>
  }, {
    prop: (<Tag componentName="prop">lowercase</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Transforming text to lowercase.</Text>
  }, {
    prop: (<Tag componentName="prop">capitalize</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Transforming text to capitalize.</Text>
  }, {
    prop: (<Tag componentName="prop">ellipsis</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying ellipsis when text-overflow.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
