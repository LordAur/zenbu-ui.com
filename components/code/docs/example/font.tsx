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

export const FontSize = () => {
  const rows = [{
    value: <Text componentName="standard">xs</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 0.75rem; /* 12px */</Text>
        <Text componentName="standard">line-height: 1rem; /* 16px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">sm</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 0.875rem; /* 14px */</Text>
        <Text componentName="standard">line-height: 1.25rem; /* 20px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">base</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 1rem; /* 16px */</Text>
        <Text componentName="standard">line-height: 1.5rem; /* 24px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">lg</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 1.125rem; /* 18px */</Text>
        <Text componentName="standard">line-height: 1.75rem; /* 28px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 1.25rem; /* 20px */</Text>
        <Text componentName="standard">line-height: 1.75rem; /* 28px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">2xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 1.5rem; /* 24px */</Text>
        <Text componentName="standard">line-height: 2rem; /* 32px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">3xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 1.875rem; /* 30px */</Text>
        <Text componentName="standard">line-height: 2.25rem; /* 36px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">4xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 2.25rem; /* 36px */</Text>
        <Text componentName="standard">line-height: 2.5rem; /* 40px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">4xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 2.25rem; /* 36px */</Text>
        <Text componentName="standard">line-height: 2.5rem; /* 40px */</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">5xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 3rem; /* 48px */</Text>
        <Text componentName="standard">line-height: 1;</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">6xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 3.75rem; /* 60px */</Text>
        <Text componentName="standard">line-height: 1;</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">7xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 4.5rem; /* 72px */</Text>
        <Text componentName="standard">line-height: 1;</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">8xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 6rem; /* 96px */</Text>
        <Text componentName="standard">line-height: 1;</Text>
      </div>
    )
  }, {
    value: <Text componentName="standard">9xl</Text>,
    css: (
      <div className="flex flex-col">
        <Text componentName="standard">font-size: 8rem; /* 128px */</Text>
        <Text componentName="standard">line-height: 1;</Text>
      </div>
    )
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const FontSizeExample = () => {
  return(
    <Example flex={false} py={5}>
      <div className="flex flex-col gap-4">
        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontSize="xs">sm</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="sm">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="xs">base</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="base">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="xs">lg</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="lg">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="xs">xl</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="xl">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="xs">2xl</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="2xl">The quick brown fox jumps over the lazy dog.</Text>
        </div>
      </div>
    </Example>
  )
}

export const FontWeight = () => {
  const rows = [{
    value: <Text componentName="standard">thin</Text>,
    css: <Text componentName="standard">font-weight: 100;</Text>
  }, {
    value: <Text componentName="standard">extralight</Text>,
    css: <Text componentName="standard">font-weight: 200;</Text>
  }, {
    value: <Text componentName="standard">light</Text>,
    css: <Text componentName="standard">font-weight: 300;</Text>
  }, {
    value: <Text componentName="standard">normal</Text>,
    css: <Text componentName="standard">font-weight: 400;</Text>
  }, {
    value: <Text componentName="standard">medium</Text>,
    css: <Text componentName="standard">font-weight: 500;</Text>
  }, {
    value: <Text componentName="standard">semibold</Text>,
    css: <Text componentName="standard">font-weight: 600;</Text>
  }, {
    value: <Text componentName="standard">bold</Text>,
    css: <Text componentName="standard">font-weight: 700;</Text>
  }, {
    value: <Text componentName="standard">extrabold</Text>,
    css: <Text componentName="standard">font-weight: 800;</Text>
  }, {
    value: <Text componentName="standard">black</Text>,
    css: <Text componentName="standard">font-weight: 900;</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const FontWeightExample = () => {
  return(
    <Example flex={false} py={5}>
      <div className="flex flex-col gap-4">
        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontSize="xs">light</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontWeight="light">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200"  fontSize="xs">normal</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontWeight="normal">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontSize="xs">medium</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontWeight="medium">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontSize="xs">semibold</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontWeight="semibold">The quick brown fox jumps over the lazy dog.</Text>
        </div>

        <div>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontSize="xs">bold</Text>
          <Text color="slate" colorContrast="800" darkColor="slate" darkColorContrast="200" fontWeight="bold">The quick brown fox jumps over the lazy dog.</Text>
        </div>
      </div>
    </Example>
  )
}
