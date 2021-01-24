import React from 'react'
import { Text, Flex, Heading } from "@chakra-ui/react"

const Follow = () => {
    return (
        <>
        <Text
        mt={8}
        letterSpacing="wide"
        >
          Estoy contando todo con total transparencia en mi <a href="https://twitter.com/jacintofleta"><b><u>twitter</u></b></a>. Cuando encuentro algo interesante en lo que profundizar también escribo en mi <b>newsletter:</b>
        </Text>
        <Flex
            mt={10}
            mb={10}  
            borderRadius="lg"
            overflow="hidden"
        >
            <iframe src="https://jacin.substack.com/embed" width="100%" height={300}
            style={{border: '1px solid #EEE', background: 'white'}} frameBorder={0} scrolling="no"/>
        </Flex>
        </>
    )
}

export default Follow
