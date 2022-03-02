import { Text, Link } from '@zenbu-ui/typography'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'

export const PreviewText = () => {
  return(
    <Example py={5}>
      <Text
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200"
      fontWeight="bold" textTransform="capitalize">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </Example>
  )
}

export const PreviewTextIndent = () => {
  return(
    <Example py={5}>
      <Text textIndent="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    </Example>
  )
}

export const PreviewTextFirstLetter = () => {
  return(
    <Example py={5}>
      <Text
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200"
      firstLetterFontSize="7xl" firstLetterFontWeight="bold" firstLetterTextTransform="uppercase"
      firstLetterTextColor="black" firstLetterSpacing={{
        mr: "2"
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Example>
  )
}

export const PreviewTextFirstLetterFloat = () => {
  return(
    <Example py={5}>
      <Text
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200"
      firstLetterFontSize="7xl" firstLetterFontWeight="bold" firstLetterTextTransform="uppercase"
      firstLetterFloat="left" firstLetterTextColor="black" firstLetterSpacing={{
        mr: "2"
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Example>
  )
}

export const PreviewTextDecoration = () => {
  return(
    <Example py={5}>
      <Text underline
      textDecorationColor="pink" textDecorationColorContrast="500" textDecorationStyle="wavy">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </Example>
  )
}

export const PreviewTextSelection = () => {
  return(
    <Example py={5}>
      <Text
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200"
      selectionColor="emerald" selectionColorContrast="500"
      selectionTextColor="white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Example>
  )
}

export const TextProps = () => {
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
    prop: (<Tag componentName="prop">span</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to be rendered as a span element.</Text>
  }, {
    prop: (<Tag componentName="prop">italic</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to be rendered as a i element.</Text>
  }, {
    prop: (<Tag componentName="prop">strong</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to be rendered as a strong element.</Text>
  }, {
    prop: (<Tag componentName="prop">mark</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to be rendered as a mark element.</Text>
  }, {
    prop: (<Tag componentName="prop">code</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to be rendered as a code element.</Text>
  }, {
    prop: (<Tag componentName="prop">underline</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to displaying text underline.</Text>
  }, {
    prop: (<Tag componentName="prop">delete</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to displaying text line streak.</Text>
  }, {
    prop: (<Tag componentName="prop">fontSize</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">base</Tag>),
    description: <Text componentName="standard">Set the font size with xs, sm, base, lg, xl, 2xl or 3xl. Read the <Link componentName="standard" href="/docs/font">font size</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">fontWeight</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">normal</Tag>),
    description: <Text componentName="standard">Set with extralight, light, normal, semibold, or bold. Read the <Link componentName="standard" href="/docs/font">font weight</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
