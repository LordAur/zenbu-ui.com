import { Tag } from '@zenbu-ui/tags'
import { Icon } from '@zenbu-ui/icon'
import { Example } from '../../../example/example'

import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

export const PreviewTags = () => {
  return(
    <Example py={5}>
      <Tag border={false}
      color="blue" colorContrast="500"
      textColor="white">
        <Icon icon="mail-open" height="4" mr="1" />
        Mail
      </Tag>
    </Example>
  )
}

export const PreviewTagsClosable = () => {
  return(
    <Example py={5}>
      <Tag border={false}
      color="blue" colorContrast="500"
      textColor="white"
      closable>
        <Icon icon="mail-open" height="4" mr="1" />
        Mail
      </Tag>
    </Example>
  )
}

export const TagsProps = () => {
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
    prop: (<Tag componentName="prop">href</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the URL page or anything.</Text>
  }, {
    prop: (<Tag componentName="prop">target</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">_blank</Tag>),
    description: <Text componentName="standard">Set target with _self, _blank, _parent, or _top.</Text>
  }, {
     prop: (<Tag componentName="prop">closable</Tag>),
      type: (<Tag componentName="type">boolean</Tag>),
      default: (<Tag componentName="type">false</Tag>),
      description: <Text componentName="standard">Set true to display a close button.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
