import { Rating } from '@zenbu-ui/rating'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewRating = () => {
  return(
    <Example py={5}>
      <Rating defaultValue={3} color="blue" colorContrast="600"  />
    </Example>
  )
}

export const PreviewRatingCount = () => {
  return(
    <Example py={5}>
      <Rating count={6} color="blue" colorContrast="600" />
    </Example>
  )
}

export const PreviewRatingHeart = () => {
  return(
    <Example py={5}>
      <Rating heart color="pink" colorContrast="500" />
    </Example>
  )
}

export const RatingProps = () => {
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
    prop: (<Tag componentName="prop">count</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">5</Tag>),
    description: <Text componentName="standard">Set max rating.</Text>
  }, {
    prop: (<Tag componentName="prop">heart</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to change rating shape with star to heart.</Text>
  }, {
    prop: (<Tag componentName="prop">defaultValue</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">0</Tag>),
    description: <Text componentName="standard">Set rating default value.</Text>
  }, {
    prop: (<Tag componentName="prop">nonActiveColorContent</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change the non active rating color, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">nonActiveColorContentContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">100</Tag>),
    description: <Text componentName="standard">Change the non active rating color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">onChange(star: number)</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Triggered after you change the value of the rating, it will return a number.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
