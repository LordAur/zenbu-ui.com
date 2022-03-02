import { Switch } from '@zenbu-ui/switch'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewSwitch = () => {
  return(
    <Example py={5}>
      <Switch color="blue" colorContrast="600"
      darkColor="blue" darkColorContrast="500"
      bgColor="slate" bgColorContrast="300"
      darkBgColor="slate" darkBgColorContrast="700" />
    </Example>
  )
}

export const PreviewSwitchLabel = () => {
  return(
    <Example py={5}>
      <Switch
      label={(<Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200" span fontSize="sm">Hey, test the switch toggle</Text>)}
      color="blue" colorContrast="600"
      bgColor="slate" bgColorContrast="300"
      darkBgColor="slate" darkBgColorContrast="700" />
    </Example>
  )
}

export const SwitchProps = () => {
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
    prop: (<Tag componentName="prop">checked</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to set default checked.</Text>
  }, {
    prop: (<Tag componentName="prop">label</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with the switch text label.</Text>
  }, {
    prop: (<Tag componentName="prop">onChange(value: boolean)</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after changed value switch component, it will return boolean.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
