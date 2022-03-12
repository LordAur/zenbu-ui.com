/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import { Box } from '@zenbu-ui/box'
import { Button } from '@zenbu-ui/button'
import { Flexbox } from '@zenbu-ui/flexbox'
import { Grid } from '@zenbu-ui/grid'
import { Icon } from '@zenbu-ui/icon'
import { ListBox } from '@zenbu-ui/list'
import { Menu, MenuFooter } from '@zenbu-ui/menu'
import { Text, Header, Link } from '@zenbu-ui/typography'
import { darkMode, toggleDarkMode } from './_app'
import { SizingIcon } from '../components/icons/sizing'
import { ColoringIcon } from '../components/icons/coloring'
import { TypographyIcon } from '../components/icons/typography'
import { ResponsiveIcon } from '../components/icons/responsive'
import { SizingCode } from '../components/code/intro/sizing'
import { ColoringCode } from '../components/code/intro/coloring'
import { TypographyCode } from '../components/code/intro/typography'
import { ResponsiveCode } from '../components/code/intro/responsive'
import { ExampleResizable } from '../components/example/resizable'

const Home: NextPage = () => {
  const [activeListBox, setActiveListBox] = React.useState(0)

  return (
    <React.Fragment>
      <Head>
        <title>Zenbu UI, The React UI component library. Don&rsquo;t waste your time to build UI component.</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Zenbu UI provides the easiest way to build a website. Sometimes dealing with CSS waste your time, and it's not simple to use CSS for some people. Zenbu UI provides you the convenience of applying your design system without CSS, just using the props." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LordAur" />
        <meta name="twitter:title" content="Zenbu UI, The React UI component library. Don't waste your time to build UI component." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zenbu UI, The React UI component library. Don't waste your time to build UI component." />
        <meta property="og:url" content="https://zenbu-ui.com/" />
        <meta property="og:description" content="Zenbu UI provides the easiest way to build a website. Sometimes dealing with CSS waste your time, and it's not simple to use CSS for some people. Zenbu UI provides you the convenience of applying your design system without CSS, just using the props." />
        <meta property="og:ttl" content="604800" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box as="section" border={false} rounded="none"
        width="screen" height="full"
        color="slate" colorContrast="50"
        darkColor="slate" darkColorContrast="700"
        selectionColor="blue" selectionColorContrast="500" selectionTextColor="white"
        darkSelectionColor="slate" darkSelectionColorContrast="200" darkSelectionTextColor="black"
        px="3" py="0" pt="5" pb="24" lg={{
          width: "full", height: "screen",
          px: "52", pt:"10", pb: "10"
        }}
        image={(
          <React.Fragment>
            <Box.Image width="72" src="/image/bg/rounded.svg" alt="Svg rounded" bottom="0" left="0" />
            <Box.Image width="72" src="/image/bg/line.svg" alt="Svg line" bottom="0" right="0" />
          </React.Fragment>
        )}>
          <Menu itemPosition="right"
          itemPX="2"
          itemTextColor="slate" itemTextColorContrast="700"
          itemTextColorHover="slate" itemTextColorHoverContrast="900"
          darkItemTextColor="slate" darkItemTextColorContrast="100" darkItemTextColorHover="slate" darkItemTextColorHoverContrast="300"
          logo={(
            <a href="/">
              <Flexbox gap="2" mt="-1" alignItems="center">
                <img src={darkMode ? "/logo/white.svg" : "/logo/black.svg"} alt="Logo Kodepanda" className="w-10" />
                <Text fontSize="base" fontWeight="bold" mt="0.5" color="slate" colorContrast="800" lg={{fontSize: "lg"}}>Zenbu UI</Text>
              </Flexbox>
            </a>
          )}
          color="transparent" border={false}
          px="0">
            <Menu.Content position="right">
              <Menu.Item href="/docs/introduction">Introduction</Menu.Item>
              <Menu.Item href="/docs/accordion">Components</Menu.Item>
              <Menu.Item
              onClick={() => toggleDarkMode()}>
                <Icon icon={darkMode ? "light-bulb" : "moon"}
                color="slate" colorContrast="700"
                darkColor="white" height="4" mt="-1" />
              </Menu.Item>
            </Menu.Content>
          </Menu>

          <div className="mt-10 lg:mt-44 mb-40 lg:mb-5">
            <Header as="h4"
            color="slate" colorContrast="800"
            darkColor="slate" darkColorContrast="100"
            fontWeight="bold" textAlign="left" lineHeight="snug"
            lg={{textAlign: "center"}}>
              Don&rsquo;t waste your time building UI Components. <br/> Just use Zenbu UI for easier developer life.
            </Header>
            <Text
            color="slate" colorContrast="700"
            darkColor="slate" darkColorContrast="100"
            textAlign="left" fontSize="lg" mt="3.5"
            lg={{textAlign: "center"}}>
              Zenbu UI is Unstyled, Flexible, Styling with props and Accessible. Everything you need is in Zenbu UI.
            </Text>
            <Flexbox mt="12" justify="center" gap="6" direction="col" lg={{direction: "row"}}>
              <Button
              color="blue" colorContrast="500"
              width="full" height="10"
              icon="chevron-right-solid" iconPosition="right"
              lg={{width: "32"}} href="/docs/quickstart">Get Started</Button>
              <Button
              color="slate" colorContrast="200"
              colorHover="slate" colorHoverContrast="300"
              icon="duplicate" iconPosition="right"
              textColor="slate" textColorContrast="500"
              darkTextColor="slate" darkTextColorContrast="700"
              width="full" lg={{width: "max"}} onClick={() => {
                var dummy = document.createElement("textarea")
                document.body.appendChild(dummy)
                dummy.value = "yarn add @zenbu-ui/react"
                dummy.select()
                document.execCommand("copy")
                document.body.removeChild(dummy)
              }}>yarn add @zenbu-ui/react</Button>
            </Flexbox>
          </div>
        </Box>

        <Box as="section" border={false} rounded="none"
        width="full"
        color="blue" colorContrast="500"
        darkColor="slate" darkColorContrast="700"
        selectionColor="blue" selectionColorContrast="500" selectionTextColor="white"
        darkSelectionColor="slate" darkSelectionColorContrast="200" darkSelectionTextColor="black"
        py="44" px="8" lg={{px: "52"}}
        image={(
          <Box.Image width="96" src="/image/bg/wavy.svg" alt="Svg kodepanda" bottom="0" left="0" />
        )}>
          <Text
          fontSize="lg" fontWeight="bold"
          color="teal" colorContrast="200">Why Zenbu UI?</Text>
          <Header as="h5" color="slate" colorContrast="100" mt="2">
            Spend less time building any style of website. <br /> No need to feel pain anymore cause of CSS.
          </Header>

          <div className="mt-12 lg:mt-20 mb-32 lg:mb-8">
            <Flexbox direction="col" gap="2" lg={{direction: "row", gap: "11"}}>
              <Box color="transparent" border={false} rounded="none"
              px="0" py="2">
                <Text
                fontSize="lg" fontWeight="bold"
                color="teal" colorContrast="200">
                  Save time. Save your energy.
                </Text>
                <Text color="slate" colorContrast="100" textAlign="justify">
                It takes a lot of time building the UI Components, sometimes you can use another UI component to create, but it&rsquo;s a pain if not match your design system. Zenbu UI is very flexible, use your design system and styling with the props.
                </Text>
              </Box>

              <Box color="transparent" border={false} rounded="none"
              px="0" py="2">
                <Text
                fontSize="lg" fontWeight="bold"
                color="teal" colorContrast="200">
                  One Component. Much Design.
                </Text>
                <Text color="slate" colorContrast="100" textAlign="justify">
                Zenbu UI can provide you to tweak the design with utility props like coloring, rounded, bordering, spacing, size, positioning, and much more. One component can handle much design. You can have peace of work with Zenbu.
                </Text>
              </Box>

              <Box color="transparent" border={false} rounded="none"
              px="0" py="2">
                <Text
                fontSize="lg" fontWeight="bold"
                color="teal" colorContrast="200">Accessible and Support Keyboard Navigation.</Text>
                <Text color="slate" colorContrast="100" textAlign="justify">
                Zenbu UI following WAI-ARIA guidelines, implementing correct semantics and behaviors for our components. Navigate the menu or any component with arrow keys, Escape, and Enter hotkeys.
                </Text>
              </Box>
            </Flexbox>
          </div>
        </Box>

        <Box as="section" border={false} rounded="none"
        width="full"
        color="slate" colorContrast="50"
        darkColor="slate" darkColorContrast="700"
        selectionColor="blue" selectionColorContrast="500" selectionTextColor="white"
        darkSelectionColor="slate" darkSelectionColorContrast="200" darkSelectionTextColor="black"
        py="44" px="3" lg={{px: "52"}}>
          <Grid>
            <Grid.Column width="2/5">
              <Text
              fontSize="lg" fontWeight="bold"
              color="blue" colorContrast="500"
              darkColor="slate" darkColorContrast="100">What you can do with Zenbu UI?</Text>
              <Header as="h5" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="100" mt="2">
                Zenbu UI has many props that can help you.
              </Header>
              <Text color="slate" colorContrast="600" darkColor="slate" darkColorContrast="100" mt="2">The main mission of Zenbu UI is a provide the easiest way to build a website. <br /> Zenbu UI provides tons of properties to build a website with your design systems.</Text>

              <div className="mt-12">
                <ListBox
                width="full"
                bgColor="transparent" border={false}
                bgActiveColor="slate" bgActiveColorContrast="200" bgColorHover="slate" bgColorHoverContrast="100"
                darkBgActiveColor="slate" darkBgActiveColorContrast="600" darkBgColorHover="slate" darkBgColorHoverContrast="600"
                space="3" lg={{width: "max"}}>
                  <ListBox.Item active={activeListBox === 0} onClick={() => setActiveListBox(0)}>
                    <Flexbox width="full" lg={{width: "96"}} alignItems="center" gap="5">
                      <SizingIcon dark={darkMode} />
                      <Text
                      fontSize="base" fontWeight="bold"
                      color="slate" colorContrast="600"
                      darkColor="slate" darkColorContrast="100">Sizing and Spacing</Text>
                    </Flexbox>
                  </ListBox.Item>
                  <ListBox.Item active={activeListBox === 1} onClick={() => setActiveListBox(1)}>
                    <Flexbox width="full" lg={{width: "96"}} alignItems="center" gap="5">
                      <ColoringIcon dark={darkMode} />
                      <Text
                      fontSize="base" fontWeight="bold"
                      color="slate" colorContrast="600"
                      darkColor="slate" darkColorContrast="100">Coloring</Text>
                    </Flexbox>
                  </ListBox.Item>
                  <ListBox.Item active={activeListBox === 2} onClick={() => setActiveListBox(2)}>
                    <Flexbox width="full" lg={{width: "96"}} alignItems="center" gap="5">
                      <TypographyIcon dark={darkMode} />
                      <Text
                      fontSize="base" fontWeight="bold"
                      color="slate" colorContrast="600"
                      darkColor="slate" darkColorContrast="100">Typography</Text>
                    </Flexbox>
                  </ListBox.Item>
                  <ListBox.Item active={activeListBox === 3} onClick={() => setActiveListBox(3)}>
                    <Flexbox width="full" lg={{width: "96"}} alignItems="center" gap="5">
                      <ResponsiveIcon dark={darkMode} />
                      <Text
                      fontSize="base" fontWeight="bold"
                      color="slate" colorContrast="600"
                      darkColor="slate" darkColorContrast="100">Responsive</Text>
                    </Flexbox>
                  </ListBox.Item>
                </ListBox>
              </div>
            </Grid.Column>

            <Grid.Column width="auto">
              {activeListBox === 0 ? (
                <Box width="full" color="gray" colorContrast="800" border={false} px="3" py="3">
                  <Flexbox gap="0.5" alignItems="center">
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <div className="w-full">
                      <Text fontSize="sm" fontWeight="light" color="slate" colorContrast="500" textAlign="center">size.tsx</Text>
                    </div>
                  </Flexbox>

                  <div className="my-5">
                    <SizingCode />
                  </div>

                  <div className="my-5 border-t-2 border-gray-600 pt-4">
                    <Box width="64" height="5" color="blue" colorContrast="700" rounded="md" border={false} px="5" py="0" mb="3"
                    lg={{width: "96"}}>
                      <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="300" textAlign="center">w-96</Text>
                    </Box>
                    <Box width="60" height="5" color="blue" colorContrast="700" rounded="md" border={false} px="5" py="0" mb="3"
                    lg={{width: "80"}}>
                      <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="300" textAlign="center">w-80</Text>
                    </Box>
                    <Box width="56" height="5" color="blue" colorContrast="700" rounded="md" border={false} px="5" py="0" mb="3"
                    lg={{width: "72"}}>
                      <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="300" textAlign="center">w-72</Text>
                    </Box>
                    <Box width="52" height="5" color="blue" colorContrast="700" rounded="md" border={false} px="5" py="0" mb="3"
                    lg={{width: "64"}}>
                      <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="300" textAlign="center">w-64</Text>
                    </Box>
                    <Box width="48" height="5" color="blue" colorContrast="700" rounded="md" border={false} px="5" py="0" mb="3"
                    lg={{width: "60"}}>
                      <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="300" textAlign="center">w-60</Text>
                    </Box>
                    <Box width="44" height="5" color="blue" colorContrast="700" rounded="md" border={false} px="5" py="0" mb="3"
                    lg={{width: "56"}}>
                      <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="300" textAlign="center">w-56</Text>
                    </Box>
                  </div>
                </Box>
              ) : activeListBox === 1 ? (
                <Box width="full" color="gray" colorContrast="800" border={false} px="3" py="3">
                  <Flexbox gap="0.5" alignItems="center">
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <div className="w-full">
                      <Text fontSize="sm" fontWeight="light" color="slate" colorContrast="500" textAlign="center">coloring.tsx</Text>
                    </div>
                  </Flexbox>

                  <div className="my-5">
                    <ColoringCode />
                  </div>

                  <div className="my-5 border-t-2 border-gray-600 pt-4">
                    <Flexbox gap="3" direction="col" lg={{direction: "row"}}>
                      <Button color="red" colorContrast="500" border={false} width="full" lg={{width: "max"}}>Button</Button>
                      <Button color="green" colorContrast="500" border={false} width="full" lg={{width: "max"}}>Button</Button>
                      <Button color="teal" colorContrast="500" border={false} width="full" lg={{width: "max"}}>Button</Button>
                      <Button color="blue" colorContrast="500" border={false} width="full" lg={{width: "max"}}>Button</Button>
                    </Flexbox>
                  </div>
                </Box>
              ) : activeListBox === 2 ? (
                <Box width="full" color="gray" colorContrast="800" border={false} px="3" py="3">
                  <Flexbox gap="0.5" alignItems="center">
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                    <div className="w-full">
                      <Text fontSize="sm" fontWeight="light" color="slate" colorContrast="500" textAlign="center">coloring.tsx</Text>
                    </div>
                  </Flexbox>

                  <div className="my-5">
                    <TypographyCode />
                  </div>

                  <div className="my-5 border-t-2 border-gray-600 pt-4">
                    <Flexbox direction="col" gap="3">
                      <Text color="white" fontWeight="light" fontSize="sm">The quick brown fox jumps over the lazy dog</Text>
                      <Text color="white" fontWeight="bold">The quick brown fox jumps over the lazy dog</Text>
                      <Text color="white" underline textDecorationColor="blue" textDecorationColorContrast="700" textDecorationStyle="wavy">The quick brown fox jumps over the lazy dog.</Text>
                    </Flexbox>
                  </div>
                </Box>
              ) : (
                <>
                  <div className="mb-5">
                    <Box width="full" color="gray" colorContrast="800" border={false} px="3" py="3">
                      <Flexbox gap="0.5" alignItems="center">
                        <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                        <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                        <Box width="3" height="3" color="slate" colorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
                        <div className="w-full">
                          <Text fontSize="sm" fontWeight="light" color="slate" colorContrast="500" textAlign="center">responsive.tsx</Text>
                        </div>
                      </Flexbox>

                      <div className="my-5">
                        <ResponsiveCode />
                      </div>
                    </Box>
                  </div>
                  <ExampleResizable>
                    <iframe className="w-full h-120 pointer-events-none" src="/examples/responsive" />
                  </ExampleResizable>
                </>
              )}
            </Grid.Column>
          </Grid>

          <div className="mt-56">
            <MenuFooter
            color="transparent" border={false}
            itemTextColor="slate" itemTextColorContrast="700"
            itemTextColorHover="blue" itemTextColorHoverContrast="600"
            darkItemTextColor="slate" darkItemTextColorContrast="100"
            darkItemTextColorHover="blue" darkItemTextColorHoverContrast="700" spaceX="56">
              <MenuFooter.Content width="72">
                <Flexbox gap="2" mt="4" alignItems="center">
                  <img src={darkMode ? "/logo/white.svg" : "/logo/black.svg"} alt="Logo Kodepanda" className="w-10" />
                  <Text fontSize="base" fontWeight="bold" mt="0.5" color="slate" colorContrast="800" lg={{fontSize: "lg"}}>Zenbu UI</Text>
                </Flexbox>
                <Text
                color="slate" colorContrast="700"
                darkColor="slate" darkColorContrast="100"
                textAlign="left" fontSize="sm" mt="2">
                  Zenbu UI created by <Link href="https://twitter.com/LordAur" color="blue" colorContrast="700" darkColor="white" fontWeight="bold">Yudha Pratama</Link>.
                </Text>
              </MenuFooter.Content>
              <Menu.Items title={(
                <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Docs</Text>
              )}>
                <Menu.Item href="/docs/introduction">Introduction</Menu.Item>
                <Menu.Item href="/docs/installation">Installation</Menu.Item>
                <Menu.Item href="/docs/components">Components</Menu.Item>
                <Menu.Item href="/docs/properties">Properties</Menu.Item>
                <Menu.Item href="/docs/theming">Theming</Menu.Item>
              </Menu.Items>
              <Menu.Items title={(
                <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Link</Text>
              )}>
                <Menu.Item href="https://github.com/KodepandaID/zenbu-ui">Github</Menu.Item>
                <Menu.Item href="https://twitter.com/LordAur">Twitter</Menu.Item>
                <Menu.Item href="https://opencollective.com/zenbu-ui">Support Zenbu UI</Menu.Item>
              </Menu.Items>
            </MenuFooter>
          </div>
        </Box>
      </main>
    </React.Fragment>
  )
}

export default Home
