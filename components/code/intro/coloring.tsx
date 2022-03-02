import Refractor from 'react-refractor'
import js from 'refractor/lang/jsx'

const code = `
  <Button color="red" colorContrast="500" />
  <Button color="green" colorContrast="500" />
  <Button color="teal" colorContrast="500" />
  <Button color="blue" colorContrast="500" />
`
Refractor.registerLanguage(js)

export const ColoringCode = () => (
  <Refractor language="jsx" value={code} />
)
