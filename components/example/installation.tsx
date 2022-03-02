import React from 'react'
import { Box } from '@zenbu-ui/box'

type NpmProps = {
  packageName: string
}

export const NpmInstall: React.FC<NpmProps> = (props) => {
  return(
    <Box width="full"
    color="slate" colorContrast="200"
    darkColor="slate" darkColorContrast="800"
    my="3" border={false} px="3" py="3">
      <p className="text-sm">
        <span className="text-blue-500">npm install</span> <span className="text-purple-500">{props.packageName}</span>
      </p>
    </Box>
  )
}
