import Refractor from 'react-refractor'
import js from 'refractor/lang/jsx'

const code = `
  <>
    <Image src="interior.jpg" width="full" height="56" rounded="lg" mb="10" objectFit="cover" />
    <Flexbox direction="col" gap="3"
    md={{ direction: "row" }}
    lg={{ direction: "row" }}>
      <Card width="full" cover="chair.jpg"
      title={( ... )}
      description={( ... )}
      footer={( ... )}
      md={{ width: "1/2" }} lg={{ width: "1/2" }} />

      <Card width="full" cover="vase.jpg"
      title={( ... )}
      description={( ... )}
      footer={( ... )}
      md={{ width: "1/2" }} lg={{ width: "1/2" }} />
    </Flexbox>
  </>
`
Refractor.registerLanguage(js)

export const ResponsiveCode = () => (
  <Refractor language="jsx" value={code} />
)
