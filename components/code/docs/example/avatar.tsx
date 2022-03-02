import React from 'react'
import { Avatar } from '@zenbu-ui/avatar'
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

export const PreviewAvatar = () => {
  return(
    <Example py={12}>
      <Avatar alt="Photo by Noah Buscher from Unsplash" src="/image/example/people/noah-buscher-unsplash.jpg" />
    </Example>
  )
}

export const PreviewAvatarBlur = () => {
  return(
    <Example py={12}>
      <Avatar blur alt="Photo by Noah Buscher from Unsplash" src="/image/example/people/noah-buscher-unsplash.jpg" />
    </Example>
  )
}

export const PreviewAvatarText = () => {
  return(
    <Example py={12}>
      <Avatar
      alt="Avatar text YP"
      bgColor="yellow" bgColorContrast="200" textColor="yellow" textColorContrast="500"
      text="YP" />
    </Example>
  )
}

export const PreviewAvatarGroup = () => {
  return(
    <Example py={12}>
      <Avatar.Group>
        <Avatar alt="Photo by Danie Franco from Unsplash" src="/image/example/people/danie-franco-unsplash.jpg" />
        <Avatar alt="Photo by Dom Aguiar from Unsplash" src="/image/example/people/dom-aguiar-unsplash.jpg" />
        <Avatar
        alt="Avatar text YP"
        bgColor="yellow" bgColorContrast="200" textColor="yellow" textColorContrast="500"
        text="YP" />
      </Avatar.Group>
    </Example>
  )
}

export const AvatarProps = () => {
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
    prop: (<Tag componentName="prop">text</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill this in if you want to add an image caption.</Text>
  }, {
    prop: (<Tag componentName="prop">blur</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true to added blurry effect on your image.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const AvatarGroupProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">space</Tag>),
    type: (<Tag componentName="type">number</Tag>),
    default: (<Tag componentName="type">-4</Tag>),
    description: <Text componentName="standard">Set the space between an avatar group image. Read the <Link componentName="standard" href="/docs/space">space between</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
