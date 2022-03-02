import { Button } from '@zenbu-ui/button'
import { Popover } from '@zenbu-ui/popover'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

export const PreviewPopover = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Popover
        trigger={(
          <Button>Popover Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom popover</p>
        )} />
      </div>
    </Example>
  )
}

export const PreviewPopoverPosition = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Popover
        position="top"
        trigger={(
          <Button>Popover Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom popover</p>
        )} />
      </div>
    </Example>
  )
}

export const PreviewPopoverClosable = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Popover
        closable
        trigger={(
          <Button>Popover Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom popover</p>
        )} />
      </div>
    </Example>
  )
}

export const PopoverProps = () => {
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
    prop: (<Tag componentName="prop">closable</Tag>),
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
    description: <Text componentName="standard">Set popover dialog position with left, right, top or bottom.</Text>
  }, {
    prop: (<Tag componentName="prop">pointerArrow</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard">Set false to hide pointer arrow of popover dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">trigger</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can fill it with a button, link, or any component to trigger the popover dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">content</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It will be displaying inside the popover dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">onOpen</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after opening the popover dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">onClose</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after closing the popover dialog.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
