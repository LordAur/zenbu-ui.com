import React from 'react'
import { Badge } from '@zenbu-ui/badge'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

export const PreviewBadge = () => {
  return(
    <Example py={12}>
      <Badge count={5}>
        <div className="bg-slate-500 w-20 h-20 rounded-lg"></div>
      </Badge>
    </Example>
  )
}

export const PreviewBadgeOverflow = () => {
  return(
    <Example py={12}>
      <Badge count={100} overflowCount={99}>
        <div className="bg-slate-500 w-20 h-20 rounded-lg"></div>
      </Badge>
    </Example>
  )
}

export const PreviewBadgePreSuff = () => {
  return(
    <Example py={12} gap={5}>
      <Badge count={100} preffix=">">
        <div className="bg-slate-500 w-20 h-20 rounded-lg"></div>
      </Badge>
      <Badge count={100} suffix="K">
        <div className="bg-slate-500 w-20 h-20 rounded-lg"></div>
      </Badge>
    </Example>
  )
}

export const BadgeProps = () => {
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
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The required number to show.</Text>
  }, {
    prop: (<Tag componentName="prop">overflowCount</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The number will be shortened if the number is bigger than an overflow count.</Text>
  }, {
    prop: (<Tag componentName="prop">preffix</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with string or HTML element and will be added to the prefix of the count number.</Text>
  }, {
    prop: (<Tag componentName="prop">suffix</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with string or HTML element and will be added to the end of the count number.</Text>
  }, {
    prop: (<Tag componentName="prop">href</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with URL if you want to move the user to the other page after clicking the badge.</Text>
  }, {
    prop: (<Tag componentName="prop">target</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">_blank</Tag>),
    description: <Text componentName="standard">Set target with _self, _blank, _parent, or _top.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
