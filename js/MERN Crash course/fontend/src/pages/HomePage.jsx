import { Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <Container maxW={'container.xl'} py={12}>
        <VStack spacing={8}>
            <Text>
                Current Products
            </Text>
            <Text>
                <Link to={"/create"}></Link>
                No Products
            </Text>
        </VStack>

    </Container>
  )
}
