import React from 'react'
import { Button } from '@zenbu-ui/button'
import { Progress } from '@zenbu-ui/progress'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewProgress = () => {
  return(
    <Example py={5}>
      <Progress percentage={50} />
    </Example>
  )
}

export const PreviewProgressColoring = () => {
  return(
    <Example py={5}>
      <Progress color="red" colorContrast="400" bgColor="slate" bgColorContrast="500" percentage={50} />
    </Example>
  )
}

export const PreviewProgressPercentage = () => {
  return(
    <Example py={5}>
      <Progress percentage={50} showPercentage />
    </Example>
  )
}

export const PreviewProgressCompleted = () => {
  const [value, setValue] = React.useState(10)

  return(
    <Example flex={false} py={5}>
      <div className="flex gap-3 mb-5">
        <Button onClick={() => {
          if (value < 100) setValue(value + 10)
        }}>+</Button>
        <Button onClick={() => setValue(10)}>Reset</Button>
      </div>
      <Progress completeColor="green" completeColorContrast="500" percentage={value} showPercentage />
    </Example>
  )
}

export const PreviewProgressText = () => {
  const [value, setValue] = React.useState(10)

  return(
    <Example flex={false} py={5}>
      <div className="flex gap-3 mb-5">
        <Button onClick={() => {
          if (value < 100) setValue(value + 10)
        }}>+</Button>
        <Button onClick={() => setValue(10)}>Reset</Button>
      </div>
      <Progress completeText="Completed" completeColor="green" completeColorContrast="500" percentage={value} showPercentage />
    </Example>
  )
}

export const ProgressProps = () => {
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
    prop: (<Tag componentName="prop">percentage</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">0</Tag>),
    description: <Text componentName="standard">Percentage value.</Text>
  }, {
    prop: (<Tag componentName="prop">showPercentage</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to displaying percentage number.</Text>
  }, {
    prop: (<Tag componentName="prop">completeColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change value color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">completeColorContentContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">400</Tag>),
    description: <Text componentName="standard">Change value color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">completeText</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying text after percentage completed.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
