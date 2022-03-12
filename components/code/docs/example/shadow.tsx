import { Box } from '@zenbu-ui/box'
import { Button } from '@zenbu-ui/button'
import { Example } from '../../../example/example'

import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'

const cols = [{
  header: (<Text componentName="table-column">Value</Text>),
  accessor: "value",
  position: "left"
},
{
  header: (<Text componentName="table-column">CSS</Text>),
  accessor: "css",
  position: "left"
}]

export const BoxShadow = () => {
  const rows = [{
    value: <Text componentName="standard">none</Text>,
    css: <Text componentName="standard">box-shadow: 0 0 #0000;</Text>
  }, {
    value: <Text componentName="standard">normal</Text>,
    css: <Text componentName="standard">box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);</Text>
  }, {
    value: <Text componentName="standard">sm</Text>,
    css: <Text componentName="standard">box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);</Text>
  }, {
    value: <Text componentName="standard">md</Text>,
    css: <Text componentName="standard">box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);</Text>
  }, {
    value: <Text componentName="standard">lg</Text>,
    css: <Text componentName="standard">box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);</Text>
  }, {
    value: <Text componentName="standard">xl</Text>,
    css: <Text componentName="standard">box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);</Text>
  }, {
    value: <Text componentName="standard">2xl</Text>,
    css: <Text componentName="standard">box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const BoxShadowExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-5">
        <Box color="white" width="8" height="8" shadow="md" rounded="lg" />
        <Box color="white" width="8" height="8" shadow="lg" rounded="lg" />
        <Box color="white" width="8" height="8" shadow="xl" rounded="lg" />
        <Box color="white" width="8" height="8" shadow="2xl" rounded="lg" />
      </div>
    </Example>
  )
}

export const BoxShadowNoneExample = () => {
  return(
    <Example py={5}>
      <Box color="white" width="8" height="8" shadow="none" rounded="lg" />
    </Example>
  )
}

export const BoxShadowColorExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-5">
        <Button
        color="cyan" colorContrast="500"
        darkColor="cyan" darkColorContrast="500"
        shadow="xl" shadowOpacity={50}
        shadowColor="cyan" shadowColorContrast="500">
          Button
        </Button>

        <Button
        color="blue" colorContrast="500"
        darkColor="blue" darkColorContrast="500"
        shadow="xl" shadowOpacity={50}
        shadowColor="blue" shadowColorContrast="500">
          Button
        </Button>

        <Button
        color="indigo" colorContrast="500"
        darkColor="indigo" darkColorContrast="500"
        shadow="xl" shadowOpacity={50}
        shadowColor="indigo" shadowColorContrast="500">
          Button
        </Button>
      </div>
    </Example>
  )
}
