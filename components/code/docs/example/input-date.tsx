import { Input } from '@zenbu-ui/input'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewInputDate = () => {
  return(
    <Example py={5}>
      <Input.Date name="tester" />
    </Example>
  )
}

export const PreviewInputDateFormat = () => {
  return(
    <Example py={5}>
      <Input.Date name="tester" format="DD MMM YYYY" />
    </Example>
  )
}

export const PreviewInputDateTime = () => {
  return(
    <Example py={5}>
      <Input.Date name="tester" time format="DD/MM/YYYY HH:mm" />
    </Example>
  )
}

export const InputDateProps = () => {
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
    prop: (<Tag componentName="prop">value</Tag>),
    type: (<Tag componentName="type">any</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the value of the input field.</Text>
  }, {
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the input field.</Text>
  }, {
    prop: (<Tag componentName="prop">required</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to make input field required value.</Text>
  }, {
    prop: (<Tag componentName="prop">fluid</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the input field width following the width screen.</Text>
  }, {
    prop: (<Tag componentName="prop">label</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the input label.</Text>
  }, {
    prop: (<Tag componentName="prop">labelPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">top</Tag>),
    description: <Text componentName="standard">Set the input label position, set with left, top, or inside.</Text>
  }, {
    prop: (<Tag componentName="prop">name</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s a required input name.</Text>
  }, {
    prop: (<Tag componentName="prop">format</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">DD/MM/YYYY</Tag>),
    description: <Text componentName="standard">Set the date format, read <Link componentName="standard" href="https://momentjs.com">momentjs</Link> library for formatting dates.</Text>
  }, {
    prop: (<Tag componentName="prop">lang</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">en</Tag>),
    description: <Text componentName="standard">By default using language en for formatting the dates, read <Link componentName="standard" href="https://momentjs.com">momentjs</Link> library to know available lang for formatting dates.</Text>
  }, {
    prop: (<Tag componentName="prop">placeholder</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the placeholder of an input field.</Text>
  }, {
    prop: (<Tag componentName="prop">placeholderColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the placeholder color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">placeholderColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">300</Tag>),
    description: <Text componentName="standard">Change the placeholder color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
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
    prop: (<Tag componentName="prop">iconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon color, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon color contrast, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">onChange(unix: number, date: string)</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Will returned the value of input field.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
