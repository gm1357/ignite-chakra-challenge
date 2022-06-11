import { Alert, AlertIcon, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Center h='100vh'>
        <Alert
          w='300px'
          status='success'>
          <AlertIcon />
          Chakra added with success!
        </Alert>
      </Center>
    </>
  )
}

export default Home
