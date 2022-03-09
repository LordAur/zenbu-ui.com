import { Input } from '@zenbu-ui/input'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

const data = [{
  key: "apple",
  value: "apple",
  text: "Apple"
}, {
  key: "orange",
  value: "orange",
  text: "Orange"
}, {
  key: "mango",
  value: "mango",
  text: "Mango"
}]

export const PreviewSelect = () => {
  return(
    <Example py={5}>
      <div className="h-32">
        <Input.Select name="tester" data={data} placeholder="Choose fruit" />
      </div>
    </Example>
  )
}

export const PreviewSelectSearch = () => {
  return(
    <Example py={5}>
      <div className="h-32">
        <Input.Select search name="tester" data={data} placeholder="Choose fruit" />
      </div>
    </Example>
  )
}

export const SelectProps = () => {
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
    prop: (<Tag componentName="prop">data</Tag>),
    type: (<Tag componentName="type">Array</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with the option data, follow the example for the data structure.</Text>
  }, {
    prop: (<Tag componentName="prop">name</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s a required input name.</Text>
  }, {
    prop: (<Tag componentName="prop">search</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying the search box.</Text>
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
    prop: (<Tag componentName="prop">dropdownItemColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">blue</Tag>),
    description: <Text componentName="standard">Change the background color of dropdown option when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownItemColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">500</Tag>),
    description: <Text componentName="standard">Change the background color of dropdown option when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownItemColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode background color of dropdown option when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownItemColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode background color of dropdown option when hovered, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">600</Tag>),
    description: <Text componentName="standard">Change the text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">white</Tag>),
    description: <Text componentName="standard">Change the text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">dropdownTextColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkDropdownTextColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the dark mode text color of dropdown option, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
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
