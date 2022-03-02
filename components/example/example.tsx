import * as React from 'react'
import { Box } from '@zenbu-ui/box'
import { Flexbox } from '@zenbu-ui/flexbox'
import { Icon } from '@zenbu-ui/icon'
import { Provider } from '@zenbu-ui/provider'

type ExampleProps = {
  dark?: boolean
  flex?: boolean
  children: React.ReactNode
  height?: number
  px?: number
  py?: number
  gap?: number
}

export const Example: React.FC<ExampleProps> = (props) => {
  const [dark, setDark] = React.useState(false)

  return(
    <div role="presentation">
      <Box width="full" color="slate" colorContrast="200" darkColor="slate" darkColorContrast="800" border={false} px="0" py="3" my="8">
        <Flexbox gap="0.5" alignItems="center" px="3">
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          {props.dark && (
            <button className="absolute right-5" onClick={() => setDark(!dark)}>
              <Icon icon={dark ? "light-bulb" : "moon"}
              color="slate" colorContrast="700"
              darkColor="white" height="4" mt="-1" />
            </button>
          )}
        </Flexbox>

        <div className={`${props.flex ? 'flex items-center justify-center' : ''} ${props.height !== undefined ? `h-${props.height}` : ''} ${props.px !== undefined ? `px-${props.px}` : ''} ${props.py !== undefined ? `py-${props.py}` : ''} ${props.gap !== undefined ? `gap-${props.gap}` : ''}`}>
          {props.dark ? (
            <Provider dark={dark}>
              {props.children}
            </Provider>
          ) : (props.children)}
        </div>
      </Box>
    </div>
  )
}

Example.defaultProps = {
  flex: true,
  px: 5
}
