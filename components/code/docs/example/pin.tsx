import { Input } from '@zenbu-ui/input'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewPin = () => {
  return(
    <Example py={5}>
      <Input.Pin name="tester" />
    </Example>
  )
}

export const PinProps = () => {
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
    prop: (<Tag componentName="prop">length</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">4</Tag>),
    description: <Text componentName="standard">Set pin length.</Text>
  }, {
    prop: (<Tag componentName="prop">name</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s a required input name.</Text>
  }, {
    prop: (<Tag componentName="prop">fluid</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the input field width following the width screen.</Text>
  }, {
    prop: (<Tag componentName="prop">borderFocusWidth</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">normal</Tag>),
    description: <Text componentName="standard">Change the border width when the input field is focused. Read the <Link componentName="standard" href="/docs/border">border</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">borderFocusColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">blue</Tag>),
    description: <Text componentName="standard">Change the border color when the input field is focused, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">borderFocusColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">600</Tag>),
    description: <Text componentName="standard">Change the border color when the input field is focused, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your input field. Read the <Link componentName="standard" href="/docs/icon">icon</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">onComplete(value: string)</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Will return the value of input pin when the input completed.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
