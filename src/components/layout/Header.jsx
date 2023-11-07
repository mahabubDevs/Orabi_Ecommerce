import Container from './Container'
import React from 'react'
import Flex from './Flex'

const Header = () => {
  return (
    <div className='bg-red-500'>
        <Container >
            <Flex className="flex justify-between">
                <h1>kasdk</h1>
                <h1>kasdk</h1>
                <h1>kasdk</h1>
            </Flex>
        </Container>
    </div>
  )
}

export default Header
