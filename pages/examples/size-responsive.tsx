import { Button } from '@zenbu-ui/button'
import { Card } from '@zenbu-ui/card'
import { Text } from '@zenbu-ui/typography'

const SizeResponsive = () => {
  return(
    <div>
      <Card
        width="full" border={false}
        cover="/image/sample/chair.jpg" coverAlt="Unsplash photo by Suuchit Poojari"
        title={(
          <>
            <Text sm={{fontSize: "xs"}}
            fontSize="sm" color="purple" colorContrast="600" darkColor="purple" darkColorContrast="600">Furniture</Text>
            <Text sm={{ fontSize: "base"  }}
            fontSize="xl" fontWeight="semibold" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">Black and Brown Wooden Chair</Text>
          </>
        )}
        description={(
          <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )}
        footer={(
          <Button fluid icon="shopping-cart" rounded="none" color="purple" colorContrast="600" fontWeight="semibold" mt="3">Add to cart</Button>
        )}
        px="3" sm={{width: "1/2"}} md={{width: "1/2"}} />
    </div>
  )
}

export default SizeResponsive
