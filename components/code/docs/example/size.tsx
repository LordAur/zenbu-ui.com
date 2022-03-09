import { Box } from '@zenbu-ui/box'
import { Example } from '../../../example/example'
import { ExampleResizable } from '../../../example/resizable'

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

export const SizeWidth = () => {
  const rows = [{
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">width: 0px;</Text>
  }, {
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">width: 0.125rem; /* 2px */</Text>
  }, {
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">width: 0.25rem; /* 4px */</Text>
  }, {
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">width: 0.375rem; /* 6px */</Text>
  }, {
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">width: 0.5rem; /* 8px */</Text>
  }, {
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">width: 0.625rem; /* 10px */</Text>
  }, {
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">width: 0.75rem; /* 12px */</Text>
  }, {
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">width: 0.875rem; /* 14px */</Text>
  }, {
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">width: 1rem; /* 16px */</Text>
  }, {
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">width: 1.25rem; /* 20px */</Text>
  }, {
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">width: 1.5rem; /* 24px */</Text>
  }, {
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">width: 1.75rem; /* 28px */</Text>
  }, {
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">width: 2rem; /* 32px */</Text>
  }, {
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">width: 2.25rem; /* 36px */</Text>
  }, {
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">width: 2.5rem; /* 40px */</Text>
  }, {
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">width: 2.75rem; /* 44px */</Text>
  }, {
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">width: 3rem; /* 48px */</Text>
  }, {
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">width: 3.5rem; /* 56px */</Text>
  }, {
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">width: 4rem; /* 64px */</Text>
  }, {
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">width: 5rem; /* 80px */</Text>
  }, {
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">width: 6rem; /* 96px */</Text>
  }, {
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">width: 7rem; /* 112px */</Text>
  }, {
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">width: 8rem; /* 128px */</Text>
  }, {
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">width: 9rem; /* 144px */</Text>
  }, {
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">width: 10rem; /* 160px */</Text>
  }, {
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">width: 11rem; /* 176px */</Text>
  }, {
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">width: 12rem; /* 192px */</Text>
  }, {
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">width: 13rem; /* 208px */</Text>
  }, {
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">width: 14rem; /* 224px */</Text>
  }, {
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">width: 15rem; /* 240px */</Text>
  }, {
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">width: 16rem; /* 256px */</Text>
  }, {
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">width: 18rem; /* 288px */</Text>
  }, {
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">width: 20rem; /* 320px */</Text>
  }, {
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">width: 24rem; /* 384px */</Text>
  }, {
    value: <Text componentName="standard">108</Text>,
    css: <Text componentName="standard">width: 40rem; /* 640px */</Text>
  }, {
    value: <Text componentName="standard">120</Text>,
    css: <Text componentName="standard">width: 45rem; /* 720px */</Text>
  }, {
    value: <Text componentName="standard">132</Text>,
    css: <Text componentName="standard">width: 55rem; /* 880px */</Text>
  }, {
    value: <Text componentName="standard">auto</Text>,
    css: <Text componentName="standard">width: auto;</Text>
  }, {
    value: <Text componentName="standard">1/2</Text>,
    css: <Text componentName="standard">width: 50%;</Text>
  }, {
    value: <Text componentName="standard">1/3</Text>,
    css: <Text componentName="standard">width: 33.333333%;</Text>
  }, {
    value: <Text componentName="standard">2/3</Text>,
    css: <Text componentName="standard">width: 66.666667%;</Text>
  }, {
    value: <Text componentName="standard">1/4</Text>,
    css: <Text componentName="standard">width: 25%;</Text>
  }, {
    value: <Text componentName="standard">2/4</Text>,
    css: <Text componentName="standard">width: 50%;</Text>
  }, {
    value: <Text componentName="standard">3/4</Text>,
    css: <Text componentName="standard">width: 75%;</Text>
  }, {
    value: <Text componentName="standard">1/5</Text>,
    css: <Text componentName="standard">width: 20%;</Text>
  }, {
    value: <Text componentName="standard">2/5</Text>,
    css: <Text componentName="standard">width: 40%;</Text>
  }, {
    value: <Text componentName="standard">3/5</Text>,
    css: <Text componentName="standard">width: 60%;</Text>
  }, {
    value: <Text componentName="standard">4/5</Text>,
    css: <Text componentName="standard">width: 80%;</Text>
  }, {
    value: <Text componentName="standard">1/6</Text>,
    css: <Text componentName="standard">width: 16.666667%;</Text>
  }, {
    value: <Text componentName="standard">2/6</Text>,
    css: <Text componentName="standard">width: 33.333333%;</Text>
  }, {
    value: <Text componentName="standard">3/6</Text>,
    css: <Text componentName="standard">width: 50%;</Text>
  }, {
    value: <Text componentName="standard">4/6</Text>,
    css: <Text componentName="standard">width: 66.666667%;</Text>
  }, {
    value: <Text componentName="standard">5/6</Text>,
    css: <Text componentName="standard">width: 83.333333%;</Text>
  }, {
    value: <Text componentName="standard">1/12</Text>,
    css: <Text componentName="standard">width: 8.333333%;</Text>
  }, {
    value: <Text componentName="standard">2/12</Text>,
    css: <Text componentName="standard">width: 16.666667%;</Text>
  }, {
    value: <Text componentName="standard">3/12</Text>,
    css: <Text componentName="standard">width: 25%;</Text>
  }, {
    value: <Text componentName="standard">4/12</Text>,
    css: <Text componentName="standard">width: 33.333333%;</Text>
  }, {
    value: <Text componentName="standard">5/12</Text>,
    css: <Text componentName="standard">width: 41.666667%;</Text>
  }, {
    value: <Text componentName="standard">6/12</Text>,
    css: <Text componentName="standard">width: 50%;</Text>
  }, {
    value: <Text componentName="standard">7/12</Text>,
    css: <Text componentName="standard">width: 58.333333%;</Text>
  }, {
    value: <Text componentName="standard">8/12</Text>,
    css: <Text componentName="standard">width: 66.666667%;</Text>
  }, {
    value: <Text componentName="standard">9/12</Text>,
    css: <Text componentName="standard">width: 75%;</Text>
  }, {
    value: <Text componentName="standard">10/12</Text>,
    css: <Text componentName="standard">width: 83.333333%;</Text>
  }, {
    value: <Text componentName="standard">11/12</Text>,
    css: <Text componentName="standard">width: 91.666667%;</Text>
  }, {
    value: <Text componentName="standard">full</Text>,
    css: <Text componentName="standard">width: 100%;</Text>
  }, {
    value: <Text componentName="standard">screen</Text>,
    css: <Text componentName="standard">width: 100vw;</Text>
  }, {
    value: <Text componentName="standard">max</Text>,
    css: <Text componentName="standard">width: max-content;</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const SizeExampleWidth = () => {
  return(
    <Example flex={false} py={5}>
      <div className="flex justify-center">
        <div className="space-y-4 font-mono font-bold text-xs text-center text-white">
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-96 hidden sm:block">96</div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-80 hidden sm:block">80</div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-64 hidden sm:block">64</div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-48">48</div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-40">40</div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-32">32</div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg w-24">24</div>
        </div>
      </div>
    </Example>
  )
}

export const SizeHeight = () => {
  const rows = [{
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">width: 0px;</Text>
  }, {
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">width: 0.125rem; /* 2px */</Text>
  }, {
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">width: 0.25rem; /* 4px */</Text>
  }, {
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">width: 0.375rem; /* 6px */</Text>
  }, {
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">width: 0.5rem; /* 8px */</Text>
  }, {
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">width: 0.625rem; /* 10px */</Text>
  }, {
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">width: 0.75rem; /* 12px */</Text>
  }, {
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">width: 0.875rem; /* 14px */</Text>
  }, {
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">width: 1rem; /* 16px */</Text>
  }, {
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">width: 1.25rem; /* 20px */</Text>
  }, {
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">width: 1.5rem; /* 24px */</Text>
  }, {
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">width: 1.75rem; /* 28px */</Text>
  }, {
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">width: 2rem; /* 32px */</Text>
  }, {
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">width: 2.25rem; /* 36px */</Text>
  }, {
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">width: 2.5rem; /* 40px */</Text>
  }, {
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">width: 2.75rem; /* 44px */</Text>
  }, {
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">width: 3rem; /* 48px */</Text>
  }, {
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">width: 3.5rem; /* 56px */</Text>
  }, {
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">width: 4rem; /* 64px */</Text>
  }, {
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">width: 5rem; /* 80px */</Text>
  }, {
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">width: 6rem; /* 96px */</Text>
  }, {
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">width: 7rem; /* 112px */</Text>
  }, {
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">width: 8rem; /* 128px */</Text>
  }, {
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">width: 9rem; /* 144px */</Text>
  }, {
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">width: 10rem; /* 160px */</Text>
  }, {
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">width: 11rem; /* 176px */</Text>
  }, {
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">width: 12rem; /* 192px */</Text>
  }, {
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">width: 13rem; /* 208px */</Text>
  }, {
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">width: 14rem; /* 224px */</Text>
  }, {
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">width: 15rem; /* 240px */</Text>
  }, {
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">width: 16rem; /* 256px */</Text>
  }, {
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">width: 18rem; /* 288px */</Text>
  }, {
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">width: 20rem; /* 320px */</Text>
  }, {
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">width: 24rem; /* 384px */</Text>
  }, {
    value: <Text componentName="standard">108</Text>,
    css: <Text componentName="standard">width: 40rem; /* 640px */</Text>
  }, {
    value: <Text componentName="standard">120</Text>,
    css: <Text componentName="standard">width: 45rem; /* 720px */</Text>
  }, {
    value: <Text componentName="standard">132</Text>,
    css: <Text componentName="standard">width: 55rem; /* 880px */</Text>
  }, {
    value: <Text componentName="standard">auto</Text>,
    css: <Text componentName="standard">width: auto;</Text>
  }, {
    value: <Text componentName="standard">1/2</Text>,
    css: <Text componentName="standard">width: 50%;</Text>
  }, {
    value: <Text componentName="standard">1/3</Text>,
    css: <Text componentName="standard">width: 33.333333%;</Text>
  }, {
    value: <Text componentName="standard">2/3</Text>,
    css: <Text componentName="standard">width: 66.666667%;</Text>
  }, {
    value: <Text componentName="standard">1/4</Text>,
    css: <Text componentName="standard">width: 25%;</Text>
  }, {
    value: <Text componentName="standard">2/4</Text>,
    css: <Text componentName="standard">width: 50%;</Text>
  }, {
    value: <Text componentName="standard">3/4</Text>,
    css: <Text componentName="standard">width: 75%;</Text>
  }, {
    value: <Text componentName="standard">1/5</Text>,
    css: <Text componentName="standard">width: 20%;</Text>
  }, {
    value: <Text componentName="standard">2/5</Text>,
    css: <Text componentName="standard">width: 40%;</Text>
  }, {
    value: <Text componentName="standard">3/5</Text>,
    css: <Text componentName="standard">width: 60%;</Text>
  }, {
    value: <Text componentName="standard">4/5</Text>,
    css: <Text componentName="standard">width: 80%;</Text>
  }, {
    value: <Text componentName="standard">1/6</Text>,
    css: <Text componentName="standard">width: 16.666667%;</Text>
  }, {
    value: <Text componentName="standard">2/6</Text>,
    css: <Text componentName="standard">width: 33.333333%;</Text>
  }, {
    value: <Text componentName="standard">3/6</Text>,
    css: <Text componentName="standard">width: 50%;</Text>
  }, {
    value: <Text componentName="standard">4/6</Text>,
    css: <Text componentName="standard">width: 66.666667%;</Text>
  }, {
    value: <Text componentName="standard">5/6</Text>,
    css: <Text componentName="standard">width: 83.333333%;</Text>
  }, {
    value: <Text componentName="standard">full</Text>,
    css: <Text componentName="standard">width: 100%;</Text>
  }, {
    value: <Text componentName="standard">screen</Text>,
    css: <Text componentName="standard">width: 100vh;</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const SizeExampleHeight = () => {
  return(
    <Example flex={false} py={5}>
      <div className="flex justify-center items-end space-x-4 font-mono font-bold text-xs text-center text-white">
        <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-96 relative">
          <div className="absolute w-8 bottom-6">
            <div className="-rotate-90">96</div>
          </div>
        </div>

        <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-80 relative">
          <div className="absolute w-8 bottom-6">
            <div className="-rotate-90">80</div>
          </div>
        </div>

        <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-64 relative">
          <div className="absolute w-8 bottom-6">
            <div className="-rotate-90">64</div>
          </div>
        </div>

        <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-48 relative">
          <div className="absolute w-8 bottom-6">
            <div className="-rotate-90">48</div>
          </div>
        </div>

        <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-40 relative">
          <div className="absolute w-8 bottom-6">
            <div className="-rotate-90">40</div>
          </div>
        </div>

        <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-32 relative">
          <div className="absolute w-8 bottom-6">
            <div className="-rotate-90">32</div>
          </div>
        </div>

        <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-24 relative">
          <div className="absolute w-8 bottom-6">
            <div className="-rotate-90">24</div>
          </div>
        </div>
      </div>
    </Example>
  )
}

export const SizeResponsive = () => {
  const cols = [{
    header: (<Text componentName="table-column">Properties</Text>),
    accessor: "properties",
    position: "left"
  },
  {
    header: (<Text componentName="table-column">Minimum Width</Text>),
    accessor: "minimum",
    position: "left"
  }, {
    header: (<Text componentName="table-column">CSS</Text>),
    accessor: "css",
    position: "left"
  }]

  const rows = [{
    properties: <Text componentName="standard">sm</Text>,
    minimum: <Text componentName="standard">640px</Text>,
    css: <Text componentName="standard">{`@media (min-width: 640px) { ... }`}</Text>
  }, {
    properties: <Text componentName="standard">md</Text>,
    minimum: <Text componentName="standard">768px</Text>,
    css: <Text componentName="standard">{`@media (min-width: 768px) { ... }`}</Text>
  }, {
    properties: <Text componentName="standard">lg</Text>,
    minimum: <Text componentName="standard">1024px</Text>,
    css: <Text componentName="standard">{`@media (min-width: 1024px) { ... }`}</Text>
  }, {
    properties: <Text componentName="standard">xl</Text>,
    minimum: <Text componentName="standard">1280px</Text>,
    css: <Text componentName="standard">{`@media (min-width: 1280px) { ... }`}</Text>
  }, {
    properties: <Text componentName="standard">2xl</Text>,
    minimum: <Text componentName="standard">1536px</Text>,
    css: <Text componentName="standard">{`@media (min-width: 1536px) { ... }`}</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700" />
  )
}

export const SizeExampleResponsive = () => {
  return(
    <ExampleResizable>
      <iframe className="w-full pointer-events-none" src="/examples/size-responsive" style={{height: "28rem"}} />
    </ExampleResizable>
  )
}
