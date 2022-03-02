import React from 'react'
import { Button } from '@zenbu-ui/button'
import { Message } from '@zenbu-ui/message'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

export const PreviewMessage = () => {
  return(
    <Example py={5}>
      <Message color="white">
        <p className="text-sm">This is a message</p>
      </Message>
    </Example>
  )
}

export const PreviewMessageHeader = () => {
  return(
    <Example py={5}>
      <Message color="white"
      header={(
        <h2 className="text-xl font-bold text-black">New Site Features</h2>
      )}
      description={(
        <ul className="list-disc list-inside text-sm text-black">
          <li>You can now have cover images on blog pages</li>
          <li>Drafts will now auto-save while writing</li>
        </ul>
      )} />
    </Example>
  )
}

export const PreviewMessageClosable = () => {
  return(
    <Example py={5}>
      <Message closable visible
      width="full" border={false} rounded="md"
      color="indigo" colorContrast="600">
        <p className="text-sm text-white w-4/5 mr-5">This website uses cookies and similar technologies and ensure the website works properly. Learn more about our privacy policy.</p>
      </Message>
    </Example>
  )
}

export const PreviewMessageFixed = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <Example py={5}>
      <Button onClick={() => setVisible(!visible)}>Click to show message</Button>

      <Message
      closable visible={visible}
      fixed position="bottom" contentCenter
      width="screen"
      border={false} rounded="none"
      color="indigo" colorContrast="600">
        <p className="text-sm text-white mr-8">This website uses cookies and similar technologies and ensure the website works properly. Learn more about our privacy policy.</p>
        <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50" type="button" onClick={() => {
          setVisible(false)
        }}>Ok, got it</button>
      </Message>
    </Example>
  )
}

export const MessageProps = () => {
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
    prop: (<Tag componentName="prop">header</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with HTML element to show the element on the header of message box.</Text>
  }, {
    prop: (<Tag componentName="prop">description</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with HTML element to show the element on the content of message box.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with HTML element to show the icon element.</Text>
  }, {
    prop: (<Tag componentName="prop">fixed</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to make message box have fixed position.</Text>
  }, {
    prop: (<Tag componentName="prop">contentCenter</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to move the content to the center of the message box.</Text>
  }, {
    prop: (<Tag componentName="prop">closable</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to displaying a close button.</Text>
  }, {
    prop: (<Tag componentName="prop">onClose</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after close the message.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
