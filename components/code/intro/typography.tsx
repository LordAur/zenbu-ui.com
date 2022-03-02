import Refractor from 'react-refractor'
import js from 'refractor/lang/jsx'

const code = `
  <Text fontWeight="light" fontSize="sm" />
  <Text fontWeight="bold" />
  <Text underline textDecorationStyle="wavy" />
`
Refractor.registerLanguage(js)

export const TypographyCode = () => (
  <Refractor language="jsx" value={code} />
)
