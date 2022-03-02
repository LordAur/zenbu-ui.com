import { Grid } from '@zenbu-ui/grid'
import { Example } from "../../../example/example"

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

export const PreviewGridWidth = () => {
  return(
    <Example flex={false}>
      <div className="flex flex-col space-y-3 my-5">
        <Grid>
          <Grid.Column width="1/2" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">1/2</p>
          </Grid.Column>
          <Grid.Column width="1/2" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">1/2</p>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column width="2/5" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">2/5</p>
          </Grid.Column>
          <Grid.Column width="3/5" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">3/5</p>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column width="1/3" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">1/3</p>
          </Grid.Column>
          <Grid.Column width="2/3" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">2/3</p>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column width="1/4" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">1/4</p>
          </Grid.Column>
          <Grid.Column width="3/4" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">3/4</p>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column width="1/5" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">1/5</p>
          </Grid.Column>
          <Grid.Column width="4/5" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">4/5</p>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column width="1/6" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">1/6</p>
          </Grid.Column>
          <Grid.Column width="5/6" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">5/6</p>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column width="full" className="bg-blue-600 rounded-lg">
            <p className="text-white text-center text-lg font-semibold">full</p>
          </Grid.Column>
        </Grid>
      </div>
    </Example>
  )
}

export const PreviewGridNested = () => {
  return(
    <Example flex={false}>
      <div className="flex flex-col space-y-3 my-5">
        <Grid>
          <Grid.Column width="full">
            <div className="bg-blue-600 rounded-lg px-5 py-5">
              <p className="text-white text-center text-2xl font-bold">4/5</p>
            </div>
            <Grid.Column nested py="5">
              <Grid.Column width="1/2" className="bg-slate-400 rounded-lg px-5 py-5">
                <p className="text-white text-center text-2xl font-bold">1/2</p>
              </Grid.Column>
              <Grid.Column width="1/2" className="bg-slate-400 rounded-lg px-5 py-5">
                <p className="text-white text-center text-2xl font-bold">1/2</p>
              </Grid.Column>
            </Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    </Example>
  )
}

export const GridProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">gap</Tag>),
    type: (<Tag componentName="type">space</Tag>),
    default: (<Tag componentName="type">4</Tag>),
    description: <Text componentName="standard">Set a gap between flex items, read the <Link componentName="standard" href="/docs/space-between">space between</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}

export const GridColumnProps = () => {
  const rows = [{
    prop: (<Tag componentName="prop">nested</Tag>),
    type: (<Tag componentName="type">boolean</Tag>),
    default: (<Tag componentName="type">false</Tag>),
    description: <Text componentName="standard">Set true if you want to make nested grid columns.</Text>
  },{
    prop: (<Tag componentName="prop">width</Tag>),
    type: (<Tag componentName="type">size</Tag>),
    default: (<Tag componentName="type">auto</Tag>),
    description: <Text componentName="standard">Set width of the grid columns, please read the <Link componentName="standard" href="/docs/sizing">sizing</Link> documentation.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
