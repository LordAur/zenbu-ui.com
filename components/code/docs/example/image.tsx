import { Image } from '@zenbu-ui/image'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text, Link } from '@zenbu-ui/typography'

export const PreviewImage = () => {
  return(
    <Example py={5}>
      <Image
      alt="Fabian Quintero from Unsplash" src="/image/example/nature/fabian-quintero-unsplash.jpg" />
    </Example>
  )
}

export const PreviewImageCaption = () => {
  return(
    <Example py={5}>
      <Image
      caption="Fabian Quintero from Unsplash"
      border borderColor="gray" borderColorContrast="200" px="2" py="2"
      alt="Fabian Quintero from Unsplash" src="/image/example/nature/fabian-quintero-unsplash.jpg" />
    </Example>
  )
}

export const PreviewImageRounded = () => {
  return(
    <Example py={5}>
      <Image
      rounded="lg"
      alt="Fabian Quintero from Unsplash" src="/image/example/nature/fabian-quintero-unsplash.jpg" />
    </Example>
  )
}

export const ImageProps = () => {
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
    prop: (<Tag componentName="prop">alt</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The required alt attribute specifies an alternate text for an image.</Text>
  }, {
    prop: (<Tag componentName="prop">src</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The image source URL.</Text>
  }, {
    prop: (<Tag componentName="prop">caption</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The image caption.</Text>
  }, {
    prop: (<Tag componentName="prop">captionFontSize</Tag>),
    type: (<Tag componentName="type">font size</Tag>),
    default: (<Tag componentName="type">xs</Tag>),
    description: <Text componentName="standard">Set the caption font size, read the <Link componentName="standard" href="/docs/font">font</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">objectFit</Tag>),
    type: (<Tag componentName="type">object fit</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Resize an image content, read the <Link componentName="standard" href="/docs/font-size">object fit</Link> documentation.</Text>
  }, {
    prop: (<Tag componentName="prop">border</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to add the border-image.</Text>
  }, {
    prop: (<Tag componentName="prop">circle</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Changing the image shape to a circle.</Text>
  }, {
    prop: (<Tag componentName="prop">blur</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to added blurry effect on your image.</Text>
  }, {
    prop: (<Tag componentName="prop">fluid</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make the image width following the width screen.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
