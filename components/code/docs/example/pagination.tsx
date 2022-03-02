import { Pagination } from '@zenbu-ui/pagination'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

export const PreviewPagination = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Pagination total={100}  border={false} />
      </div>
    </Example>
  )
}

export const PreviewPaginationSimple = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
        <Pagination total={100} border={false} color="transparent"
        colorHover="slate" colorHoverContrast="300"
        darkColorHover="slate" darkColorHoverContrast="500"
        textColor="slate" textColorContrast="700"
        darkTextColor="slate" darkTextColorContrast="200"/>
      </div>
    </Example>
  )
}

export const PreviewPaginationTotal = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
      <Pagination total={100} border={false}
      showTotal={(total) => (
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200" fontSize="sm">
          Total {total} data
        </Text>
      )} />
      </div>
    </Example>
  )
}

export const PreviewPaginationRange = () => {
  return(
    <Example py={5}>
      <div className="h-32 py-12">
      <Pagination total={100} border={false}
      showTotal={(total, range) => (
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200" fontSize="sm">
          {range[0]}-{range[1]} of {total} items
        </Text>
      )} />
      </div>
    </Example>
  )
}

export const PaginationProps = () => {
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
    prop: (<Tag componentName="prop">total</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the total data you have, the component will count and rendered the pagination.</Text>
  }, {
    prop: (<Tag componentName="prop">showTotal(total: number, range: Array{`<number>`})</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It will return total data on a page and will return the data range on pagination.</Text>
  }, {
    prop: (<Tag componentName="prop">pageSize</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">10</Tag>),
    description: <Text componentName="standard">Set total data to return in one page.</Text>
  }, {
    prop: (<Tag componentName="prop">defaultPage</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">1</Tag>),
    description: <Text componentName="standard">Set the open default page.</Text>
  }, {
    prop: (<Tag componentName="prop">onChange(currentPage: number)</Tag>),
    type: (<Tag componentName="type">function</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It will return your current page, triggered after you move to another page.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
