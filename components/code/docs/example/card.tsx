import { Button } from '@zenbu-ui/button'
import { Card } from '@zenbu-ui/card'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewCard = () => {
  return(
    <Example py={5}>
      <Card border={false}
      cover="/image/example/norbert-levajsics-unsplash.jpeg" coverAlt="Unsplash photo by Norbert Levajsics"
      title={(
        <>
          <Text fontSize="xs" color="purple" colorContrast="400" darkColor="purple" darkColorContrast="400">Case Study</Text>
          <Text fontSize="base" fontWeight="semibold" color="black" darkColor="black">Improve your customer experience</Text>
        </>
      )}
      description={(
        <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      )} px="3" />
    </Example>
  )
}

export const PreviewCardAspectRatio = () => {
  return(
    <Example py={5}>
      <Card border={false}
      cover="/image/example/norbert-levajsics-unsplash.jpeg" coverAlt="Unsplash photo by Norbert Levajsics" coverAspectRatio="square"
      title={(
        <>
          <Text fontSize="xs" color="purple" colorContrast="400" darkColor="purple" darkColorContrast="400">Case Study</Text>
          <Text fontSize="base" fontWeight="semibold" color="black" darkColor="black">Improve your customer experience</Text>
        </>
      )}
      description={(
        <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      )} px="3" />
    </Example>
  )
}

export const PreviewCardBackground = () => {
  return(
    <Example py={5}>
      <Card border={false}
      bgImg="/image/example/ralph-kelly-unsplash.jpeg"
      description={(
        <Text fontSize="sm" textAlign="justify" color="white" darkColor="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      )} px="5" py="6" />
    </Example>
  )
}

export const PreviewCardPosition = () => {
  return(
    <Example py={5} gap={3}>
      <Card border={false}
      cover="/image/example/norbert-levajsics-unsplash.jpeg" coverAlt="Unsplash photo by Norbert Levajsics" coverWidth="32" coverPosition="left"
      title={(
        <>
          <Text fontSize="xs" color="purple" colorContrast="400" darkColor="purple" darkColorContrast="400">Case Study</Text>
          <Text fontSize="base" fontWeight="semibold" color="black" darkColor="black">Improve your customer experience</Text>
        </>
      )}
      description={(
        <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      )} px="3" />

      <Card border={false}
      cover="/image/example/norbert-levajsics-unsplash.jpeg" coverAlt="Unsplash photo by Norbert Levajsics" coverWidth="32" coverPosition="right"
      title={(
        <>
          <Text fontSize="xs" color="purple" colorContrast="400" darkColor="purple" darkColorContrast="400">Case Study</Text>
          <Text fontSize="base" fontWeight="semibold" color="black" darkColor="black">Improve your customer experience</Text>
        </>
      )}
      description={(
        <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      )} px="3" />
    </Example>
  )
}

export const PreviewCardPositionCenter = () => {
  return(
    <Example py={5}>
      <Card border={false}
      cover="/image/example/norbert-levajsics-unsplash.jpeg" coverAlt="Unsplash photo by Norbert Levajsics" coverPosition="center"
      title={(
        <>
          <Text fontSize="xs" color="purple" colorContrast="400" darkColor="purple" darkColorContrast="400">Case Study</Text>
          <Text fontSize="base" fontWeight="semibold" color="black" darkColor="black">Improve your customer experience</Text>
        </>
      )}
      description={(
        <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      )} px="3" />
    </Example>
  )
}

export const PreviewCardFooter = () => {
  return(
    <Example py={5}>
      <Card border={false}
      cover="/image/example/ralph-kelly-unsplash.jpeg" coverAlt="Unsplash photo by Ralph Kelly"
      title={(
        <>
          <Text fontSize="xs" color="purple" colorContrast="600" darkColor="purple" darkColorContrast="600">New House</Text>
          <Text fontSize="base" fontWeight="semibold" color="black" darkColor="black">Medium Blue House, Indonesia</Text>
        </>
      )}
      description={(
        <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      )}
      footer={(
        <Button fluid icon="calendar" rounded="none" color="purple" colorContrast="600" fontWeight="semibold" mt="3">Request to meet the owner</Button>
      )}
      px="3" />
    </Example>
  )
}

export const CardProps = () => {
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
    prop: (<Tag componentName="prop">title</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the title of card.</Text>
  }, {
    prop: (<Tag componentName="prop">description</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the content of card.</Text>
  }, {
    prop: (<Tag componentName="prop">footer</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Displaying the footer of card.</Text>
  }, {
    prop: (<Tag componentName="prop">bgImg</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Put the background image on the card component.</Text>
  }, {
    prop: (<Tag componentName="prop">cover</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Put the cover image on the card component.</Text>
  }, {
    prop: (<Tag componentName="prop">coverAlt</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The alt attribute specifies an alternate text for an image.</Text>
  }, {
    prop: (<Tag componentName="prop">coverWidth</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">full</Tag>),
    description: <Text componentName="standard">Set width of the cover image, please read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">coverPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">top</Tag>),
    description: <Text componentName="standard">Set position of the cover image, set with top, bottom, left, or right.</Text>
  }, {
    prop: (<Tag componentName="prop">coverPadding</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set to true if you want to display a cover image with padding on the card component.</Text>
  }, {
    prop: (<Tag componentName="prop">coverRounded</Tag>),
    type: (<Tag componentName="type">rounded</Tag>),
    default: (<Tag componentName="type">none</Tag>),
    description: <Text componentName="standard">Change the cover rounded corner, please read the <Link componentName="standard" href="/docs/rounded">rounded</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">coverAspectRatio</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: (<Tag componentName="type">3/1.464</Tag>),
    description: <Text componentName="standard">Set the aspect ratio of the cover image, please read the <Link componentName="standard" href="/docs/aspect-ratio">aspect ratio</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
