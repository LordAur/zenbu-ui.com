import React from 'react'
import { Box } from '@zenbu-ui/box'
import { Button } from '@zenbu-ui/button'
import { Flexbox } from '@zenbu-ui/flexbox'
import { Icon } from '@zenbu-ui/icon'
import { Provider } from '@zenbu-ui/provider'
import { Text } from '@zenbu-ui/typography'

import Refractor from 'react-refractor'
import js from 'refractor/lang/jsx'

const code = `
import * as React from 'react'
import { Button } from '@zenbu-ui/button'
import { Provider } from '@zenbu-ui/provider'

const App = () => {
  const [dark, setDark] = React.useState(false)

  return(
    <Provider dark={dark}>
      <Button
      color="blue" colorContrast="500"
      darkColor="blue" darkColorContrast="800">
        Button
      </Button>
    </Provider>
  )
}

export default App
`

export const PreviewDarkMode = () => {
  const [dark, setDark] = React.useState(false)

  return(
    <div role="presentation">
      <Box width="full" color="slate" colorContrast="200" darkColor="slate" darkColorContrast="800" border={false} px="0" py="3">
        <Flexbox gap="0.5" alignItems="center" px="3">
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <button className="absolute right-5" onClick={() => setDark(!dark)}>
            <Icon icon={dark ? "light-bulb" : "moon"}
            color="slate" colorContrast="700"
            darkColor="white" height="4" mt="-1" />
          </button>
        </Flexbox>

        <div className="flex items-center justify-center h-36">
          <Provider dark={dark}>
            <Button color="blue" colorContrast="500" darkColor="blue" darkColorContrast="800">Button</Button>
          </Provider>
        </div>
      </Box>
    </div>
  )
}

export const ExampleDarkMode = () => {
  Refractor.registerLanguage(js)

  return(
    <Box width="full" color="slate" colorContrast="200" darkColor="slate" darkColorContrast="800" my="3" border={false} px="3" py="3">
      <Flexbox gap="0.5" alignItems="center">
        <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
        <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
        <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
        <div className="w-full -ml-5">
          <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="500" textAlign="center">your-file.tsx</Text>
        </div>
      </Flexbox>
      <div className="mt-3">
        <Refractor language="jsx" value={code} />
      </div>
    </Box>
  )
}
