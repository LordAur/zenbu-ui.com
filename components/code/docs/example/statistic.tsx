import { Statistic } from '@zenbu-ui/statistic'
import { Icon } from '@zenbu-ui/icon'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewStatistic = () => {
  return(
    <Example flex={false} py={5}>
      <Statistic title="Active Users"
      titleColor="slate" titleColorContrast="700"
      darkTitleColor="slate" darkTitleColorContrast="200"
      valueColor="slate" valueColorContrast="700"
      darkValueColor="slate" darkValueColorContrast="200"
      value={1000} />
    </Example>
  )
}

export const PreviewStatisticPrefSuff = () => {
  return(
    <Example flex={false} py={5} gap={5}>
      <Statistic title="Wallet"
      titleColor="slate" titleColorContrast="700"
      darkTitleColor="slate" darkTitleColorContrast="200"
      valueColor="slate" valueColorContrast="700"
      darkValueColor="slate" darkValueColorContrast="200"
      value={1000} prefix="Rp" mb="10" />
      <Statistic title="Orders"
      titleColor="slate" titleColorContrast="700"
      darkTitleColor="slate" darkTitleColorContrast="200"
      valueColor="slate" valueColorContrast="700"
      darkValueColor="slate" darkValueColorContrast="200"
      value={100} suffix="K" />
    </Example>
  )
}

export const PreviewStatisticIcon = () => {
  return(
    <Example flex={false} py={5}>
      <Statistic
      icon={(<Icon icon="users-solid" color="black" darkColor="white" />)}
      title="Active Users"
      titleColor="slate" titleColorContrast="700"
      darkTitleColor="slate" darkTitleColorContrast="200"
      valueColor="slate" valueColorContrast="700"
      darkValueColor="slate" darkValueColorContrast="200"
      value={1000} />
    </Example>
  )
}

export const PreviewStatisticSeparator = () => {
  return(
    <Example flex={false} py={5}>
      <Statistic title="Active Users"
      titleColor="slate" titleColorContrast="700"
      darkTitleColor="slate" darkTitleColorContrast="200"
      valueColor="slate" valueColorContrast="700"
      darkValueColor="slate" darkValueColorContrast="200"
      value={1000} separator="comma" />
    </Example>
  )
}

export const StatisticProps = () => {
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
    prop: (<Tag componentName="prop">separator</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">dot</Tag>),
    description: <Text componentName="standard">Set decimal thousands separator, set with dot or comma.</Text>
  }, {
    prop: (<Tag componentName="prop">prefix</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set prefix statistic with html element.</Text>
  }, {
    prop: (<Tag componentName="prop">suffix</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set suffix statistic with html element.</Text>
  }, {
    prop: (<Tag componentName="prop">title</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s required title for statistic.</Text>
  }, {
    prop: (<Tag componentName="prop">titleColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change title color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">titleColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">400</Tag>),
    description: <Text componentName="standard">Change title color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkTitleColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change title dark mode color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkTitleColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change title dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">value</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">It&rsquo;s a required value number to display.</Text>
  }, {
    prop: (<Tag componentName="prop">valueColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: (<Tag componentName="type">gray</Tag>),
    description: <Text componentName="standard">Change value color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">valueColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: (<Tag componentName="type">400</Tag>),
    description: <Text componentName="standard">Change value color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkValueColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change value dark mode color for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkValueColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change value dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-pallete">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">icon</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard"></Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
