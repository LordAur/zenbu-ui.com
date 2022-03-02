import React from 'react'
import { Button } from '@zenbu-ui/button'
import { Card } from '@zenbu-ui/card'
import { Flexbox } from '@zenbu-ui/flexbox'
import { Image } from '@zenbu-ui/image'
import { Text } from '@zenbu-ui/typography'

const Responsive = () => {
  return(
    <div className="px-3">
      <Image src="/image/sample/interior.jpg" alt="Unsplash photo by Toa Heftiba" width="full" height="56" rounded="lg" mb="10" objectFit="cover" />
      <Flexbox direction="col" gap="3"
      md={{
        direction: "row",
        gap: "3"
      }}
      lg={{
        direction: "row",
        gap: "6"
      }}>
        <Card
        width="full" border={false}
        cover="/image/sample/chair.jpg" coverAlt="Unsplash photo by Suuchit Poojari"
        title={(
          <React.Fragment>
            <Text fontSize="xs" color="purple" colorContrast="600" darkColor="purple" darkColorContrast="600">Furniture</Text>
            <Text fontSize="base" fontWeight="semibold" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">Black and Brown Wooden Chair</Text>
          </React.Fragment>
        )}
        description={(
          <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )}
        footer={(
          <Button fluid icon="shopping-cart" rounded="none" color="purple" colorContrast="600" fontWeight="semibold" mt="3">Add to cart</Button>
        )}
        px="3" md={{width: "1/2"}} lg={{width: "1/2"}} />

        <Card
        width="full" border={false}
        cover="/image/sample/vas.jpg" coverAlt="Unsplash photo by Nathan Oakley"
        title={(
          <React.Fragment>
            <Text fontSize="xs" color="purple" colorContrast="600" darkColor="purple" darkColorContrast="600">Furniture</Text>
            <Text fontSize="base" fontWeight="semibold" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">Black Ceramic Vase</Text>
          </React.Fragment>
        )}
        description={(
          <Text fontSize="sm" textAlign="justify" color="slate" colorContrast="700" darkColor="slate" darkColorContrast="700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )}
        footer={(
          <Button fluid icon="shopping-cart" rounded="none" color="purple" colorContrast="600" fontWeight="semibold" mt="3">Add to cart</Button>
        )}
        px="3" md={{width: "1/2"}} lg={{width: "1/2"}} />
      </Flexbox>
    </div>
  )
}

export default Responsive
