import '../styles/globals.css'
import '../styles/main.css'
import * as React from 'react'
import type { AppProps } from 'next/app'
import { MdxComponentProvider } from '../context/MdxComponents'
import { Provider } from '@zenbu-ui/provider'

export let darkMode: boolean
export let toggleDarkMode: () => void
function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = React.useState(false)
  toggleDarkMode = () => {
    darkMode = !darkMode
    setDark(!dark)
  }

  return(
    <MdxComponentProvider>
      <Provider dark={dark} theme={{
        header: {
          "standard": {
            color: "slate",
            colorContrast: "700",
            darkColor: "slate",
            darkColorContrast: "200"
          }
        },
        link: {
          "standard": {
            fontSize: "sm",
            fontWeight: "bold",
            color: "blue",
            colorContrast: "700",
            darkColor: "blue",
            darkColorContrast: "500",
          }
        },
        tags: {
          "prop": {
            border: false,
            color: "blue",
            colorContrast: "600",
            textColor: "white"
          },
          "type": {
            border: false,
            color: "slate",
            colorContrast: "200",
            textColor: "slate",
            textColorContrast: "700"
          }
        },
        text: {
          "standard": {
            fontSize: "sm",
            color: "slate",
            colorContrast: "700",
            darkColor: "slate",
            darkColorContrast: "200"
          },
          "table-column": {
            fontSize: "sm",
            fontWeight: "bold",
            color: "slate",
            colorContrast: "700",
            darkColor: "slate",
            darkColorContrast: "200"
          }
        }
      }}>
        <Component {...pageProps} />
      </Provider>
    </MdxComponentProvider>
  )
}

export default MyApp
