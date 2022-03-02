import { Flexbox } from '@zenbu-ui/flexbox'
import { ExampleResizable } from '../../../example/resizable'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewFlexboxInitial = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="3">
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox flexInitial justify="center" alignItems="center" width="24" sm={{width: "64"}}>
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flexInitial justify="center" alignItems="center" width="32" sm={{width: "14"}}>
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const PreviewFlexbox1 = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="3">
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox flex1 justify="center" alignItems="center" width="64">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flex1 justify="center" alignItems="center" width="32">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const PreviewFlexboxAuto = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="3">
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox flexAuto justify="center" alignItems="center" width="64">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flexAuto justify="center" alignItems="center" width="32">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const PreviewFlexboxNone = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="2">
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox flexNone justify="center" alignItems="center" width="44">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flex1 justify="center" alignItems="center" width="32">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const PreviewFlexGrow = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="3">
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox flexNone grow justify="center" alignItems="center" height="14">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const PreviewFlexUngrow = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="3">
        <Flexbox flexNone grow justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox flexNone unGrow justify="center" alignItems="center" height="14">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flexNone grow justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const PreviewFlexShrink = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="3">
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox shrink justify="center" alignItems="center" width="64">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const PreviewFlexUnshrink = () => {
  return(
    <ExampleResizable>
      <Flexbox gap="3">
        <Flexbox flex1 justify="center" alignItems="center" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
        </Flexbox>
        <Flexbox unShrink justify="center" alignItems="center" width="32">
          <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
        </Flexbox>
        <Flexbox flex1 justify="center" alignItems="center" height="14">
          <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
        </Flexbox>
      </Flexbox>
    </ExampleResizable>
  )
}

export const FlexboxProps = () => {
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
    prop: (<Tag componentName="prop">direction</Tag>),
    type: (<Tag componentName="type">flex direction</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the direction of flex items, set with col, row, col-reverse, or row-reverse.</Text>
  }, {
    prop: (<Tag componentName="prop">wrap</Tag>),
    type: (<Tag componentName="type">flex wrap</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the flex items wrap, set with wrap, nowrap, or wrap-reverse.</Text>
  }, {
    prop: (<Tag componentName="prop">justify</Tag>),
    type: (<Tag componentName="type">justify content</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set flex items positioned along with a container&rsquo;, set with center, start, end, between, arround, or evenly.</Text>
  }, {
    prop: (<Tag componentName="prop">justifyItems</Tag>),
    type: (<Tag componentName="type">justify items</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set flex items aligned along their inline axis, set with center, start, end, or stretch.</Text>
  }, {
    prop: (<Tag componentName="prop">alignContent</Tag>),
    type: (<Tag componentName="type">align content</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set rows positioned in multi-row flex and grid containers, set with center, start, end, between, arround, or evenly.</Text>
  }, {
    prop: (<Tag componentName="prop">alignItems</Tag>),
    type: (<Tag componentName="type">align items</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set flex items positioned along a container&rsquo;s cross, set with center, start, end, baseline, or stretch.</Text>
  }, {
    prop: (<Tag componentName="prop">flex1</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Allow a flex item to grow and shrink as needed, ignoring its initial size.</Text>
  }, {
    prop: (<Tag componentName="prop">flexAuto</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Allow a flex item to grow and shrink, taking into account its initial size.</Text>
  }, {
    prop: (<Tag componentName="prop">flexInitial</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Allow a flex item to shrink but not grow, taking into account its initial size.</Text>
  }, {
    prop: (<Tag componentName="prop">flexNone</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Prevent a flex item from growing or shrinking.</Text>
  }, {
    prop: (<Tag componentName="prop">grow</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Allow a flex item to grow to fill any available space.</Text>
  }, {
    prop: (<Tag componentName="prop">unGrow</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Prevent a flex item from growing.</Text>
  }, {
    prop: (<Tag componentName="prop">shrink</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Allow a flex item to shrink if needed.</Text>
  }, {
    prop: (<Tag componentName="prop">unShrink</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Prevent a flex item from shrinking.</Text>
  }, {
    prop: (<Tag componentName="prop">gap</Tag>),
    type: (<Tag componentName="type">space</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set a gap between flex items, read the <Link componentName="standard" href="/docs/space-between">space between</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
