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

export const BorderSize = () => {
  const rows = [{
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">border-width: 0px;</Text>
  }, {
    value: <Text componentName="standard">normal</Text>,
    css: <Text componentName="standard">border-width: 1px;</Text>
  }, {
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">border-width: 2px;</Text>
  }, {
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">border-width: 4px;</Text>
  }, {
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">border-width: 8px;</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const BorderSizeExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-4">
        <Box width="12" height="12" borderWidth="normal" rounded="none" color="white" borderColor="blue" borderColorContrast="700" px="0" py="0">
        </Box>

        <Box width="12" height="12" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" px="0" py="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">2</p>
          </div>
        </Box>

        <Box width="12" height="12" borderWidth="4" rounded="none" color="white" borderColor="blue" borderColorContrast="700" px="0" py="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">4</p>
          </div>
        </Box>

        <Box width="12" height="12" borderWidth="8" rounded="none" color="white" borderColor="blue" borderColorContrast="700" px="0" py="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">8</p>
          </div>
        </Box>
      </div>
    </Example>
  )
}

export const BorderStyleExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-4">
        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">solid</p>
          </div>
        </Box>

        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" borderStyle="dashed" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">dashed</p>
          </div>
        </Box>

        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" borderStyle="dotted" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">dotted</p>
          </div>
        </Box>

        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" borderStyle="double" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">double</p>
          </div>
        </Box>
      </div>
    </Example>
  )
}

export const BorderPositionExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-4">
        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" borderPosition="top" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">top</p>
          </div>
        </Box>

        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" borderPosition="right" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">right</p>
          </div>
        </Box>

        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" borderPosition="bottom" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">bottom</p>
          </div>
        </Box>

        <Box width="20" height="5" borderWidth="2" rounded="none" color="white" borderColor="blue" borderColorContrast="700" borderPosition="left" px="0">
          <div className="h-full flex justify-center items-center">
            <p className="text-xs text-slate-700">left</p>
          </div>
        </Box>
      </div>
    </Example>
  )
}
