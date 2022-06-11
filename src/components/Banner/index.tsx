import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function Banner() {
  return (
    <Flex
      justifyContent={['center', 'center', 'space-between']}
      alignItems='center'
      backgroundImage='/images/banner-background.svg'
      h={['163px', '335px']}
    >
      <Box
        color='white'
        pl={['0', '0', '140px']}
        m={['0 20px', '0 20px', '0']}
        textAlign={['center', 'center', 'left']}
        width='430px'
      >
        <Heading
          fontSize={['20px', '20px', '36px']}
          lineHeight={['30px', '30px', '54px']}
        >
          5 Continents, endless possibilities
        </Heading>
        <Text
          fontSize={['14px', '14px', '20px']}
          lineHeight={['21px', '21px', '30px']}
        >
          It&rsquo;s time for your travel plans to take off!
        </Text>
      </Box>
      <Image
        src='/images/airplane.svg'
        alt='A night sky full of stars'
        h='270px'
        display={['none', 'none', 'initial']}
        mt='130px'
      />
    </Flex>
  )
}
