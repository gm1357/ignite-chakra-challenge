import { Alert, AlertIcon, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Center h='100vh'>
      <Alert
        w='300px'
        status='success'>
        <AlertIcon />
        Chakra added with success!
      </Alert>
    </Center>
  )
}

export default Home
