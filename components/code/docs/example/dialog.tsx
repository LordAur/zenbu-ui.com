import React from 'react'
import { Dialog } from '@zenbu-ui/dialog'
import { Button } from '@zenbu-ui/button'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewDialog = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <Example py={5}>
      <Button onClick={() => setVisible(true)}>Show Dialog</Button>
      <Dialog visible={visible} onClose={() => setVisible(false)}>
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700" fontSize="2xl" fontWeight="semibold" mb="2">Show Basic Dialog</Text>
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Dialog>
    </Example>
  )
}

export const PreviewDialogTitle = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <Example py={5}>
      <Button onClick={() => setVisible(true)}>Show Dialog</Button>
      <Dialog
      title={(
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700" fontSize="sm" fontWeight="semibold">Show Dialog Dialog</Text>
      )}
      visible={visible} onClose={() => setVisible(false)}>
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Dialog>
    </Example>
  )
}

export const PreviewDialogFooter = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <Example py={5}>
      <Button onClick={() => setVisible(true)}>Show Dialog</Button>
      <Dialog
      title={(
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700" fontSize="sm" fontWeight="semibold">Show Dialog Dialog</Text>
      )}
      footer={(
        <div className="w-full flex justify-end space-x-3">
          <Button color="red" colorContrast="500" onClick={() => setVisible(false)}>Cancel</Button>
          <Button color="green" colorContrast="600">Ok</Button>
        </div>
      )}
      visible={visible} onClose={() => setVisible(false)}>
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Dialog>
    </Example>
  )
}

export const DialogProps = () => {
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
    prop: (<Tag componentName="prop">visible</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to show the alert dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">closabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard">Displaying the close button.</Text>
  }, {
    prop: (<Tag componentName="prop">closeClickOutside</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Close the dialog after clicking the outside.</Text>
  }, {
    prop: (<Tag componentName="prop">title</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with HTML element to show the element on the title of dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">titleColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background color title for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">titleColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background color contrast title for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">footer</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with HTML element to show the element on the footer of dialog.</Text>
  }, {
    prop: (<Tag componentName="prop">footerColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background color footer for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">footerColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background color contrast footer for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkTitleColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background dark mode color title for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkTitleColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background dark mode color contrast title for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkFooterColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background dark mode color footer for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkFooterColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background dark mode color contrast footer for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">okText</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">Yes</Tag>),
    description: <Text componentName="standard">The text value of the OK button.</Text>
  }, {
    prop: (<Tag componentName="prop">onClose</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after closing dialog.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
