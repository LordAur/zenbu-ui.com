import { Button } from '@zenbu-ui/button'
import { NotificationProvider, Notification, useNotification } from '@zenbu-ui/notification'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

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

const Add = () => {
  const notify = useNotification()

  return(
    <Button onClick={() => {
      notify.add(Date.now().toString(), {
        title: (
          <span className="flex space-x-2 items-center">
            <div className="bg-blue-500 rounded-md w-5 h-5"></div>
            <strong className="text-sm">Notification</strong>
          </span>
        ),
        description: <p className="text-sm text-gray-800">Hello, world! This is a notification message.</p>
      })
    }}>Push Notification</Button>
  )
}

const AddCustom = () => {
  const notify = useNotification()

  return(
    <Button onClick={() => {
      const id = Date.now().toString()
      notify.addCustom(id, {
        custom: (
          <Notification id={id} closable
          color="blue" colorContrast="600" border={false}
          description={(
            <p className="text-sm text-white">Hello, world! This is a notification message.</p>
          )} />
        )
      })
    }}>Push Notification</Button>
  )
}

export const PreviewNotification = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <NotificationProvider closable>
          <Add />
        </NotificationProvider>
      </div>
    </Example>
  )
}

export const PreviewNotificationPosition = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <NotificationProvider closable position="top-right">
          <Add />
        </NotificationProvider>
      </div>
    </Example>
  )
}


export const PreviewNotificationAutoHide = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <NotificationProvider autoHide autoHideDelay={3000}>
          <Add />
        </NotificationProvider>
      </div>
    </Example>
  )
}

export const PreviewNotificationCustom = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <NotificationProvider closable>
          <AddCustom />
        </NotificationProvider>
      </div>
    </Example>
  )
}

export const NotificationProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">id</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You should set a unique id to your notification.</Text>
  }, {
    prop: (<Tag componentName="prop">title</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s required for the title on your notification box.</Text>
  }, {
    prop: (<Tag componentName="prop">description</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s required for the content on your notification box.</Text>
  }, {
    prop: (<Tag componentName="prop">position</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">bottom-right</Tag>),
    description: <Text componentName="standard">Set the notification box position, set with top-right, top-left, top-center, bottom-right, bottom-left, or bottom-center.</Text>
  },{
    prop: (<Tag componentName="prop">closable</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to displaying a close button.</Text>
  },{
    prop: (<Tag componentName="prop">autoHide</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the notification box hidden automatically.</Text>
  }, {
    prop: (<Tag componentName="prop">autoHideDelay</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">3000</Tag>),
    description: <Text componentName="standard">You can set when the notification box will disappear, fill with millisecond.</Text>
  }, {
    prop: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the notification box.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const NotificationProviderProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">position</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">bottom-right</Tag>),
    description: <Text componentName="standard">Set the notification box position, set with top-right, top-left, top-center, bottom-right, bottom-left, or bottom-center.</Text>
  },{
    prop: (<Tag componentName="prop">closable</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to displaying a close button.</Text>
  },{
    prop: (<Tag componentName="prop">autoHide</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the notification box hidden automatically.</Text>
  }, {
    prop: (<Tag componentName="prop">autoHideDelay</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">3000</Tag>),
    description: <Text componentName="standard">You can set when the notification box will disappear, fill with millisecond.</Text>
  }, {
    prop: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the notification box.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
