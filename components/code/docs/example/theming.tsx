import { Box } from '@zenbu-ui/box'
import { Button } from '@zenbu-ui/button'
import { Flexbox } from '@zenbu-ui/flexbox'
import { Provider } from '@zenbu-ui/provider'

export const PreviewTheming = () => {
  return(
    <div role="presentation">
      <Box width="full" color="slate" colorContrast="200" darkColor="slate" darkColorContrast="800" border={false} px="0" py="3">
        <Flexbox gap="0.5" alignItems="center" px="3">
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
        </Flexbox>

        <div className="flex items-center justify-center h-36">
          <Provider dark={false} theme={{
            button: {
              "red-button": {
                color: "red",
                colorContrast: "600"
              },
              "emerald-button": {
                color: "emerald",
                colorContrast: "500"
              }
            }
          }}>
            <Flexbox gap="5">
              <Button componentName="red-button">Button</Button>
              <Button componentName="emerald-button">Button</Button>
            </Flexbox>
          </Provider>
        </div>
      </Box>
    </div>
  )
}
