import { Center, Image } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
    return (
        <Center h={['50px', '100px']} bg='white'>
            <Link href="/">
                <a>
                    <Image
                        src='/images/logo.svg' 
                        alt='World trip written in a stylized manner'
                        w={['81px', '185px']}
                    ></Image>
                </a>
            </Link>
        </Center>
    )
}