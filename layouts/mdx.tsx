import { Box } from '@zenbu-ui/box'
import { Flexbox } from '@zenbu-ui/flexbox'
import { Text, Link } from '@zenbu-ui/typography'
import Refractor from 'react-refractor'
import js from 'refractor/lang/jsx'

const MDX = {
  h2: (props: any) => {
    const id = `${props.children.toLowerCase().replace(/ /g, "-").replace(/^[\d]+/g, "").replace(".-", "")}`
    return(
      <Link href={`#${id}`} target="_self">
        <div id={id} className="scroll-mt-16">
          <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="100" fontSize="lg" fontWeight="bold" mt="10" mb="3">{props.children}</Text>
        </div>
      </Link>
    )
  },
  h3: (props: any) => {
    const id = `${props.children.toLowerCase().replace(/ /g, "-").replace(/^[\d]+/g, "").replace(".-", "")}`
    return(
      <div id={id} className="scroll-mt-16">
        <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="100" fontWeight="bold" mb="2">{props.children}</Text>
      </div>
    )
  },
  p: (props: any) => <Text color="slate" colorContrast="700" darkColor="slate" darkColorContrast="100" fontSize="sm" fontWeight="light" mb="3">{props.children}</Text>,
  strong: (props: any) => <Text span color="slate" colorContrast="700" darkColor="slate" darkColorContrast="100" fontSize="sm" fontWeight="semibold">{props.children}</Text>,
  a: (props: any) => <Link href={props.href} color="blue" colorContrast="700" darkColor="white" fontWeight="semibold">{props.children}</Link>,
  code: (props: any) => {
    Refractor.registerLanguage(js)

    return(
      <Box width="full" color="slate" colorContrast="200" darkColor="slate" darkColorContrast="800" my="3" border={false} px="3" py="3" mb="10">
        <Flexbox gap="0.5" alignItems="center">
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <Box width="3" height="3" color="slate" colorContrast="300" darkColor="slate" darkColorContrast="600" rounded="full" border={false} px="0" py="0"></Box>
          <div className="w-full -ml-5">
            <Text fontSize="xs" fontWeight="light" color="slate" colorContrast="500" textAlign="center">your-file.tsx</Text>
          </div>
        </Flexbox>
        <div className="mt-5">
          <Refractor language="jsx" value={props.children} />
        </div>
      </Box>
    )
  }
}

export default MDX
