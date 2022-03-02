import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'

type MdxProps = {
  children: React.ReactNode
}

export function MdxComponentProvider(props: MdxProps) {
  return (
    <MDXProvider>
      {props.children}
    </MDXProvider>
  )
}
