import React from 'react'
import { Box } from '@zenbu-ui/box'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

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


export const PreviewBox = () => {
  return(
    <Example dark py={5}>
      <Box width="32" height="32" color="blue" colorContrast="600" darkColor="blue" darkColorContrast="800" border={false} />
    </Example>
  )
}

export const PreviewBoxImage = () => {
  return(
    <Example py={5}>
      <Box width="full" height="32" border={false}
      color="slate" colorContrast="500"
      image={(
        <Box.Image width="24" src="/image/bg/rounded.svg" alt="Svg rounded" bottom="0" left="0" />
      )}>
        <Box.Content>
          <p className="text-slate-200 text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </Box.Content>
      </Box>
    </Example>
  )
}

export const PreviewBoxBgImage = () => {
  return(
    <Example py={5}>
      <Box width="full" height="32" border={false}
      color="slate" colorContrast="500"
      bgImage="/image/example/nature/fabian-quintero-unsplash.jpg"
      overlay px="0" py="0">
        <Box.Content px="5" py="5">
          <p className="text-slate-200 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </Box.Content>
      </Box>
    </Example>
  )
}

export const PreviewBoxGradient = () => {
  return(
    <Example py={5}>
      <Box
      width="full" height="32"
      bgGradientPosition="right"
      bgGradientFromColor="indigo" bgGradientFromColorContrast="500"
      bgGradientMiddleColor="purple" bgGradientMiddleColorContrast="500"
      bgGradientEndColor="pink" bgGradientEndColorContrast="500"
      border={false} />
    </Example>
  )
}

export const BoxProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">as</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">div</Tag>),
    description: <Text componentName="standard">Set the renders element, you can fill it with div, main, section, or article.</Text>
  }, {
    prop: (<Tag componentName="prop">rotate</Tag>),
    type: (<Tag componentName="type">Rotate</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Rotate the box element, you can read the <Link componentName="standard" href="/docs/rotate">Rotate</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">image</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Put an image on your box element, but you must use Box.Image component in this property.</Text>
  }, {
    prop: (<Tag componentName="prop">bgImage</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with image URL as a background image on box element.</Text>
  }, {
    prop: (<Tag componentName="prop">overlay</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set to true if you want to add an overlay as a background box element.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const BoxImageProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">src</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with an image URL.</Text>
  }, {
    prop: (<Tag componentName="prop">alt</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The required alt attribute specifies an alternate text for an image.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
