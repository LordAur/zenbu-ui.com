import { Button } from '@zenbu-ui/button'
import { Tooltip } from '@zenbu-ui/tooltip'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

export const PreviewTooltip = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Tooltip
        trigger={(
          <Button>Tooltip Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom tooltip</p>
        )} />
      </div>
    </Example>
  )
}

export const PreviewTooltipPopup = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Tooltip popup
        trigger={(
          <Button>Tooltip Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom tooltip</p>
        )} />
      </div>
    </Example>
  )
}

export const PreviewTooltipPosition = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Tooltip position="top"
        trigger={(
          <Button>Tooltip Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom tooltip</p>
        )} />
      </div>
    </Example>
  )
}

export const TooltipProps = () => {
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
    prop: (<Tag componentName="prop">popup</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to displaying a close button.</Text>
  }, {
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to disable the popover trigger.</Text>
  }, {
    prop: (<Tag componentName="prop">position</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">bottom</Tag>),
    description: <Text componentName="standard">Set tooltip dialog position with left, right, top or bottom.</Text>
  }, {
    prop: (<Tag componentName="prop">pointerArrow</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard">Set false to hide pointer arrow of tooltip dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">trigger</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can fill it with a button, link, or any component to trigger the tooltip dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">content</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It will be displaying inside the tooltip dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">onOpen</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after opening the tooltip dialog.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
