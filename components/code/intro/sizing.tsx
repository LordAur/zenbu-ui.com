import Refractor from 'react-refractor'
import js from 'refractor/lang/jsx'

const code = `
  <Box width="96" height="5" mb="3" />
  <Box width="80" height="5" mb="3" />
  <Box width="72" height="5" mb="3" />
  <Box width="64" height="5" mb="3" />
  <Box width="60" height="5" mb="3" />
  <Box width="56" height="5" mb="3" />
`
Refractor.registerLanguage(js)

export const SizingCode = () => (
  <Refractor language="jsx" value={code} />
)
