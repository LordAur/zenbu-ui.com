import { Text, Link, Blockquote } from '@zenbu-ui/typography'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'

export const PreviewBlockquote = () => {
  return(
    <Example py={5}>
      <Blockquote border={false} width="96" textAlign="center" cite="https://www.goodreads.com/author/quotes/9810.Albert_Einstein">
        I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
      </Blockquote>
    </Example>
  )
}

export const PreviewBlockquoteCaption = () => {
  return(
    <Example py={5}>
      <Blockquote
      bgCaptionColor="fuchsia" bgCaptionColorContrast="500"
      width="96" border={false}
      rounded="lg"
      cite="https://www.goodreads.com/author/quotes/9810.Albert_Einstein"
      px="5" py="4"
      caption={(
        <p className="text-white text-sm">—<cite>Albert Einstein</cite></p>
      )}>
        I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
      </Blockquote>
    </Example>
  )
}

export const PreviewBlockquoteFalse = () => {
  return(
    <Example py={5}>
      <Blockquote
      quote={false}
      quoteColor="purple" quoteColorContrast="600"
      bgCaptionColor="fuchsia" bgCaptionColorContrast="500"
      width="96" textAlign="center"
      rounded="lg" border={false}
      cite="https://www.goodreads.com/author/quotes/9810.Albert_Einstein"
      px="5" py="4"
      caption={(
        <p className="text-white text-sm">—<cite>Albert Einstein</cite></p>
      )}>
        I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
      </Blockquote>
    </Example>
  )
}

export const BlockquoteProps = () => {
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
    prop: (<Tag componentName="prop">cite</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">The property of blockquote tag element.</Text>
  }, {
    prop: (<Tag componentName="prop">quote</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">true</Tag>),
    description: <Text componentName="standard">Set true to displaying quote icon.</Text>
  }, {
    prop: (<Tag componentName="prop">quoteColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change quote icon color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">quoteColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change quote icon color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkQuoteColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change quote icon dark mode color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkQuoteColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change quote icon dark modecolor contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background caption color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background caption color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkBgCaptionColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background caption dark mode color for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">darkBgCaptionColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Change background caption dark mode color contrast for more information, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionGradientPosition</Tag>),
    type: (<Tag componentName="type">string</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the background color gradient position. Set with top, top-left, top-right, bottom, bottom-left, bottom-right, left, or right.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionGradientFromColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the starting color of a gradient, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionGradientFromColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the starting color contrast of a gradient, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionGradientMiddleColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Add a middle color to a gradient, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionGradientMiddleColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Add a middle color contrast to a gradient, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionGradientEndColor</Tag>),
    type: (<Tag componentName="type">color</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the ending color of a gradient, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">bgCaptionGradientEndColorContrast</Tag>),
    type: (<Tag componentName="type">contrast</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Set the ending color of a gradient, read the <Link componentName="standard" href="/docs/color-palette">color palette</Link>.</Text>
  }, {
    prop: (<Tag componentName="prop">caption</Tag>),
    type: (<Tag componentName="type">HTMLElement</Tag>),
    default: <Text fontSize="sm" textAlign="center">-</Text>,
    description: <Text componentName="standard">Fill with HTML element to show the element on the caption box.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
