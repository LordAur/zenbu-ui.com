import { Image } from '@zenbu-ui/image'

import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'
import { Example } from '../../../example/example'

export const RotateSize = () => {
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

  const rows = [{
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">transform: rotate(0deg);</Text>
  }, {
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">transform: rotate(1deg);</Text>
  }, {
    value: <Text componentName="standard">02</Text>,
    css: <Text componentName="standard">transform: rotate(2deg);</Text>
  }, {
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">transform: rotate(3deg);</Text>
  }, {
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">transform: rotate(6deg);</Text>
  }, {
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">transform: rotate(12deg);</Text>
  }, {
    value: <Text componentName="standard">45</Text>,
    css: <Text componentName="standard">transform: rotate(45deg);</Text>
  }, {
    value: <Text componentName="standard">90</Text>,
    css: <Text componentName="standard">transform: rotate(90deg);</Text>
  }, {
    value: <Text componentName="standard">180</Text>,
    css: <Text componentName="standard">transform: rotate(180deg);</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const RotateExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-12 items-center">
        <div className="flex flex-col gap-2">
          <Text fontSize="xs" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200" textAlign="center" mb="10">rotate=0</Text>
          <Image width="24" height="24" alt="Fabian Quintero - Unsplash" src="/image/example/nature/fabian-quintero-unsplash.jpg" rounded="lg" rotate="0" />
        </div>
        <div className="flex flex-col gap-2">
          <Text fontSize="xs" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200" textAlign="center" mb="10">rotate=45</Text>
          <Image width="24" height="24" alt="Fabian Quintero - Unsplash" src="/image/example/nature/fabian-quintero-unsplash.jpg" rounded="lg" rotate="45" />
        </div>
        <div className="flex flex-col gap-2">
          <Text fontSize="xs" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200" textAlign="center" mb="10">rotate=90</Text>
          <Image width="24" height="24" alt="Fabian Quintero - Unsplash" src="/image/example/nature/fabian-quintero-unsplash.jpg" rounded="lg" rotate="90" />
        </div>
        <div className="flex flex-col gap-2">
          <Text fontSize="xs" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200" textAlign="center" mb="10">rotate=180</Text>
          <Image width="24" height="24" alt="Fabian Quintero - Unsplash" src="/image/example/nature/fabian-quintero-unsplash.jpg" rounded="lg" rotate="180" />
        </div>
      </div>
    </Example>
  )
}
