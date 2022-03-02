import React from 'react'
import { Table } from '@zenbu-ui/table'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Text, Link } from '@zenbu-ui/typography'

const columns = [{
  header: "Name",
  accessor: "name",
  position: "left"
}, {
  header: "Job",
  accessor: "job",
  position: "left"
}, {
  header: "Age",
  accessor: "age",
  position: "left",
  width: "12"
}]

const rows = [{
  name: "Jhon",
  job: "Frontend Engineer",
  age: 24
}, {
  name: "Gill",
  job: "DevOps",
  age: 31
}, {
  name: "Oesman",
  job: "Backend Engineer",
  age: <b>27</b>
}]

export const PreviewTable = () => {
  return(
    <Example flex={false} py={5}>
      <Table columns={columns} rows={rows} borderColorContrast="300"
      textColor="slate" textColorContrast="700"
      darkTextColor="slate" darkTextColorContrast="200"  />
    </Example>
  )
}

export const PreviewTableColoring = () => {
  return(
    <Example flex={false} py={5}>
      <Table
      columns={columns} rows={rows} border
      textColor="white"
      borderColor="blue" borderColorContrast="700"
      colColor="blue" colColorContrast="600"
      rowColor="blue" rowColorContrast="500" />
    </Example>
  )
}

export const PreviewTableStriping = () => {
  return(
    <Example flex={false} py={5}>
      <Table stripe
      columns={columns} rows={rows}
      textColor="white"
      borderColor="blue" borderColorContrast="700"
      colColor="blue" colColorContrast="700"
      rowColor="blue" rowColorContrast="500"
      stripeColor="blue" stripeColorContrast="600" />
    </Example>
  )
}

export const PreviewTableNumbering = () => {
  return(
    <Example flex={false} py={5}>
      <Table stripe numbering
      rowNumber={(idx) => (<b>{idx}.</b>)}
      columns={columns} rows={rows}
      textColor="white"
      borderColor="blue" borderColorContrast="700"
      colColor="blue" colColorContrast="700"
      rowColor="blue" rowColorContrast="500"
      stripeColor="blue" stripeColorContrast="600" />
    </Example>
  )
}

export const PreviewTableCheckbox = () => {
  const [selected, setSelected] = React.useState<Array<number>>([])

  return(
    <Example flex={false} py={5}>
      <Text
      color="slate" colorContrast="700"
      darkColor="slate" darkColorContrast="200"
      mb="5">
        Selected: <strong>{selected.join(", ")}</strong>
      </Text>
      <Table stripe checkbox selected={selected}
      columns={columns} rows={rows}
      textColor="gray" textColorContrast="700"
      borderColor="gray" borderColorContrast="300"
      colColor="gray" colColorContrast="400"
      rowColor="gray" rowColorContrast="200"
      stripeColor="gray" stripeColorContrast="300"
      onSelected={(selected: Array<number>) => setSelected([...selected])} />
    </Example>
  )
}

export const PreviewTableOnClick = () => {
  const rows = [{
    name: "Jhon",
    job: "Frontend Engineer",
    age: 24
  }, {
    name: "Gill",
    job: "DevOps",
    age: 31
  }, {
    name: "Oesman",
    job: "Backend Engineer",
    age: <b>27</b>,
    onClick: () => { alert("alert") }
  }]

  return(
    <Example flex={false} py={5}>
      <Table
      columns={columns} rows={rows} border
      textColor="white"
      borderColor="blue" borderColorContrast="700"
      colColor="blue" colColorContrast="600"
      rowColor="blue" rowColorContrast="500" />
    </Example>
  )
}


export const ColumnTable = () => {
  const columns = [{
    header: <Text componentName="table-column">Key</Text>,
    accessor: "key",
    position: "left"
  }, {
    header: <Text componentName="table-column">Type</Text>,
    accessor: "type",
    position: "left"
  }, {
    header: <Text componentName="table-column">Description</Text>,
    accessor: "description",
    position: "left"
  }]

  const rows = [{
    key: (<Tag componentName="prop">header</Tag>),
    type: (<Tag componentName="prop">HTMLElement</Tag>),
    description: <Text componentName="standard">Displaying a header column.</Text>
  }, {
    key: (<Tag componentName="prop">accessor</Tag>),
    type: (<Tag componentName="prop">string</Tag>),
    description: <Text componentName="standard">It&rsquo;s a key object name.</Text>
  }, {
    key: (<Tag componentName="prop">position</Tag>),
    type: (<Tag componentName="prop">string</Tag>),
    description: <Text componentName="standard">Displaying a header column position, set with left, right, or center.</Text>
  }, {
    key: (<Tag componentName="prop">width</Tag>),
    type: (<Tag componentName="prop">size</Tag>),
    description: <Text componentName="standard">Set the header column width, read the <Link componentName="standard" href="/docs/sizing">size</Link> documentation.</Text>
  }, {
    key: (<Tag componentName="prop">onClick</Tag>),
    type: (<Tag componentName="prop">function</Tag>),
    description: <Text componentName="standard">Triggered after clicking the row.</Text>
  }]

  return(
    <Table columns={columns} rows={rows}  />
  )
}

export const TableProps = () => {
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
    prop: (<Tag componentName="prop">stripe</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying stripe rows with different colors.</Text>
  }, {
    prop: (<Tag componentName="prop">numbering</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying the row numbers.</Text>
  }, {
    prop: (<Tag componentName="prop">checkbox</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Displaying the rows checkbox.</Text>
  }, {
    prop: (<Tag componentName="prop">colNumber</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the column text header of the numbering table.</Text>
  }, {
    prop: (<Tag componentName="prop">rowNumber</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the column text row of the numbering table.</Text>
  }, {
    prop: (<Tag componentName="prop">columns</Tag>),
    type: (<Tag componentName="type">array</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">See the structuring of <Link componentName="standard" href="#columns-structure">columns</Link> header.</Text>
  }, {
    prop: (<Tag componentName="prop">rows</Tag>),
    type: (<Tag componentName="type">array</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with your data rows.</Text>
  }, {
    prop: (<Tag componentName="prop">colColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the columns background color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">colColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the columns background color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkColColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the columns background dark mode color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkColColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the columns background dark mode color constrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">colBorderWidth</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the columns border width, read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  },{
    prop: (<Tag componentName="prop">colBorderColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the columns border color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">colBorderColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">200</Tag>),
    description: <Text componentName="standard">Change the columns border color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">rowColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">rowColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">rowColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background color hover, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">rowColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background color hover contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkRowColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background dark mode color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkRowColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background dark mode color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkRowColorHover</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background dark mode color hover, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkRowColorHoverContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows background dark mode color hover contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">rowBorderWidth</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows border width, read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  },{
    prop: (<Tag componentName="prop">rowBorderColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the rows border color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">rowBorderColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">200</Tag>),
    description: <Text componentName="standard">Change the rows border color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">stripeColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows stripe background color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">stripeColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows stripe background color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkStripeColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows stripe background dark mode color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkStripeColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the rows stripe background dark mode color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">checkboxColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the checkbox color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">checkboxColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the checkbox color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkCheckboxColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the checkbox dark mode color, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkCheckboxColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change the checkbox dark mode color contrast, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">onSelected(selected: Array)</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default:  <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It will return the selected array index of rows.</Text>
  }]

  return(
    <Table columns={cols} rows={rows}  />
  )
}
