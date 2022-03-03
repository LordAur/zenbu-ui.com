import { Input } from '@zenbu-ui/input'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewInput = () => {
  return(
    <Example py={5}>
      <Input name="tester" placeholder="Write text here..." />
    </Example>
  )
}

export const PreviewInputClear = () => {
  return(
    <Example py={5}>
      <Input name="tester" placeholder="Write text here..." clearValue />
    </Example>
  )
}

export const PreviewInputLabel = () => {
  return(
    <Example py={5}>
      <div className="flex-col">
        <Input name="tester" placeholder="Write text here..." icon="user"
        label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Firstname</Text>)} mb="5" />
      </div>
    </Example>
  )
}

export const PreviewInputPassword = () => {
  return(
    <Example py={5}>
      <Input name="tester" value="tester" placeholder="Write text here..." type="password" />
    </Example>
  )
}

export const PreviewInputIcon = () => {
  return(
    <Example py={5}>
      <div className="flex flex-col gap-4">
        <Input name="tester" value="tester" placeholder="Write text here..." icon="mail" />
        <Input name="tester" value="tester" placeholder="Write text here..." icon="mail" iconColor="blue" iconPosition="right" />
      </div>
    </Example>
  )
}

export const PreviewInputIconAction = () => {
  return(
    <Example py={5}>
      <Input name="tester" placeholder="Search..." icon="search" iconAction="microphone-solid" iconActionClick={() => alert("alert")} />
    </Example>
  )
}

export const InputProps = () => {
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
    prop: (<Tag componentName="prop">clearValue</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">The clear button will be displaying if the input field has a value.</Text>
  }, {
    prop: (<Tag componentName="prop">disabled</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Disabled the input field.</Text>
  }, {
    prop: (<Tag componentName="prop">readOnly</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the input field can&rsquo;t be changed the value.</Text>
  }, {
    prop: (<Tag componentName="prop">required</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to make input field required value.</Text>
  }, {
    prop: (<Tag componentName="prop">error</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true displaying error message.</Text>
  }, {
    prop: (<Tag componentName="prop">errorText</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Will be displaying when the error property is true.</Text>
  }, {
    prop: (<Tag componentName="prop">success</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true displaying success message.</Text>
  }, {
    prop: (<Tag componentName="prop">successText</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Will be displaying when the success property is true.</Text>
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
    prop: (<Tag componentName="prop">type</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">text</Tag>),
    description: <Text componentName="standard">Set type of the input field, set with text, password, email, tel, url, number, or file.</Text>
  }, {
    prop: (<Tag componentName="prop">placeholder</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the placeholder of an input field.</Text>
  }, {
    prop: (<Tag componentName="prop">minLength</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the minimal length value of the input field.</Text>
  }, {
    prop: (<Tag componentName="prop">maxLength</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the maximal length value of the input field.</Text>
  }, {
    prop: (<Tag componentName="prop">placeholderColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the placeholder color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">placeholderColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">300</Tag>),
    description: <Text componentName="standard">Change the placeholder color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">borderFocusWidth</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">normal</Tag>),
    description: <Text componentName="standard">Change the border width when the input field is focused. Read the <Link componentName="standard" href="/docs/border">border</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">borderFocusColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">blue</Tag>),
    description: <Text componentName="standard">Change the border color when the input field is focused, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">borderFocusColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">600</Tag>),
    description: <Text componentName="standard">Change the border color when the input field is focused, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon on your input field. Read the <Link componentName="standard" href="/docs/icon">icon</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconAction</Tag>),
    type: (<Tag componentName="type">icon</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">You can put an icon as a trigger for the action. Read the <Link componentName="standard" href="/docs/icon">icon</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">iconActionColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the icon action color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconActionColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the icon action color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">iconActionClick</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after clicking the icon action.</Text>
  }, {
    prop: (<Tag componentName="prop">onChange(value: string)</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Will returned the value of input field.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
