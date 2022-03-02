import { Box } from '@zenbu-ui/box'
import { Text } from '@zenbu-ui/typography'

export const NpmCode = () => {
  return(
    <Box width="full"
    color="slate" colorContrast="200"
    darkColor="slate" darkColorContrast="800"
    my="3" border={false} px="3" py="3">
      <p className="text-sm">
        <span className="text-blue-500">npm install</span> <span className="text-purple-500">@zenbu-ui/react@latest</span>
      </p>
    </Box>
  )
}

export const YarnCode = () => {
  return(
    <Box width="full"
    color="slate" colorContrast="200"
    darkColor="slate" darkColorContrast="800"
    my="3" border={false} px="3" py="3">
      <p className="text-sm">
        <span className="text-blue-500">yarn add</span> <span className="text-purple-500">@zenbu-ui/react@latest</span>
      </p>
    </Box>
  )
}

export const TailwindGenerate = () => {
  return(
    <Box width="full"
    color="slate" colorContrast="200"
    darkColor="slate" darkColorContrast="800"
    my="3" border={false} px="3" py="3">
      <Text span fontSize="sm" color="blue" colorContrast="500" darkColor="blue" darkColorContrast="500">npx tailwindcss@3.0.19</Text> <Text span fontSize="sm" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200">-o</Text> <Text span fontSize="sm" color="purple" colorContrast="500" darkColor="purple" darkColorContrast="500">your-project-folder</Text> <Text span fontSize="sm" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200">-c</Text> <Text span fontSize="sm" color="purple" colorContrast="500" darkColor="purple" darkColorContrast="500">./tailwind.config.js</Text> <Text span fontSize="sm" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="200">--minify</Text>
    </Box>
  )
}
