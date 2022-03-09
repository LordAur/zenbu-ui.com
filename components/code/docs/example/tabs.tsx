import { Button } from '@zenbu-ui/button'
import { Tabs } from '@zenbu-ui/tabs'
import { Input } from '@zenbu-ui/input'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

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

export const PreviewTabs = () => {
  return(
    <Example py={5}>
      <Tabs>
      <Tabs.Item title={(<Text span fontSize="sm">Account</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Make changes to your account here. Click save when you&rsquo;re done.</Text>

        <div className="mt-3">
          <Input fluid name="name" value="Yudha Pratama"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Name</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="username" value="@LordAur"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Username</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Save changes</Button>
          </div>
        </div>
      </Tabs.Item>

      <Tabs.Item title={(<Text span fontSize="sm">Password</Text>)}>
        <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Change your password here. After saving, you&rsquo;ll be logged out.</Text>

        <div className="mt-3">
          <Input fluid name="current_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Current Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">New Password</Text>)}
          borderColor="blue" borderColorContrast="500" mb="1.5" />
          <Input fluid name="confirm_password" type="password"
          label={(<Text span color="gray" colorContrast="600" fontSize="xs">Confirm Password</Text>)}
          borderColor="blue" borderColorContrast="500" />

          <div className="w-full flex justify-end mt-4">
            <Button color="blue" colorContrast="500" textColor="white">Change password</Button>
          </div>
        </div>
      </Tabs.Item>
    </Tabs>
    </Example>
  )
}

export const TabsProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">simple</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to displaying simple tabs without background.</Text>
  }, {
    prop: (<Tag componentName="prop">defaultActiveIndex</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">1</Tag>),
    description: <Text componentName="standard">Set default tab open.</Text>
  }, {
    prop: (<Tag componentName="prop">borderActiveColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">blue</Tag>),
    description: <Text componentName="standard">Change tabs border color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">borderActiveColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">600</Tag>),
    description: <Text componentName="standard">Change tabs border color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">focusColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change focus background color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">focusColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">100</Tag>),
    description: <Text componentName="standard">Change focus background color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkFocusColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change focus background dark mode color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkFocusColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change focus background dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const TabsItemProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">active</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to make tabs active.</Text>
  }, {
    prop: (<Tag componentName="prop">title</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s required for the title on your tabs.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
