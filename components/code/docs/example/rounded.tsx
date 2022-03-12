import { Box } from '@zenbu-ui/box'

import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'
import { Example } from '../../../example/example'

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

export const RoundedSize = () => {
  const rows = [{
    value: <Text componentName="standard">none</Text>,
    css: <Text componentName="standard">border-radius: 0px;</Text>
  }, {
    value: <Text componentName="standard">sm</Text>,
    css: <Text componentName="standard">border-radius: 0.125rem; /* 2px */</Text>
  }, {
    value: <Text componentName="standard">md</Text>,
    css: <Text componentName="standard">border-radius: 0.375rem; /* 6px */</Text>
  }, {
    value: <Text componentName="standard">lg</Text>,
    css: <Text componentName="standard">border-radius: 0.5rem; /* 8px */</Text>
  }, {
    value: <Text componentName="standard">xl</Text>,
    css: <Text componentName="standard">border-radius: 0.75rem; /* 12px */</Text>
  }, {
    value: <Text componentName="standard">2xl</Text>,
    css: <Text componentName="standard">border-radius: 1rem; /* 16px */</Text>
  }, {
    value: <Text componentName="standard">3xl</Text>,
    css: <Text componentName="standard">border-radius: 1.5rem; /* 24px */</Text>
  }, {
    value: <Text componentName="standard">full</Text>,
    css: <Text componentName="standard">border-radius: 9999px;</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const RoundedExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-4">
        <Box border={false} color="blue" colorContrast="600" width="8" height="8" rounded="sm">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white font-semibold">sm</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600" width="8" height="8" rounded="md">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white font-semibold">md</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600" width="8" height="8" rounded="lg">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white font-semibold">lg</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600" width="8" height="8" rounded="full">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white font-semibold">full</p>
          </div>
        </Box>
      </div>
    </Example>
  )
}

export const RoundedPositionExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-4">
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="top">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">top</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="right">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">right</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="bottom">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">bottom</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="left">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">left</p>
          </div>
        </Box>
      </div>
    </Example>
  )
}

export const RoundedPositionOneCornerExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-4">
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="top-left">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">top-left</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="top-right">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">top-right</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="bottom-left">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">bottom-left</p>
          </div>
        </Box>
        <Box border={false} color="blue" colorContrast="600"
        rounded="lg" roundedPosition="bottom-right">
          <div className="flex justify-center items-center">
            <p className="text-xs text-white">bottom-right</p>
          </div>
        </Box>
      </div>
    </Example>
  )
}
