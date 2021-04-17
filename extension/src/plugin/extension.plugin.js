import { Heading, Button } from '@chakra-ui/react'

export default {
  'growlers/Header': {
    function: () => <Heading>Happy Valley Growlers</Heading>,
  },
  'growlers/Footer': {
    function: () => <Heading>My Custom Footer</Heading>,
  },
  'growlers/filter': {
    function: (beverages) => beverages[0].slice(0, 3),
  },
  'growlers/TapList': {
    'member-function': {
      renderAddToCart: () => <Button>Add to the cart</Button>,
    },
  },
}
