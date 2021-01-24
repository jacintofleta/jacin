import React from 'react'
import { Text, Flex, Heading, Box } from "@chakra-ui/react"

const Follow = () => {
    return (
        <Box mt={10} mb={20}>
        <Text
        mt={8}
        letterSpacing="wide"
        >
          Estoy contando todo con total transparencia en mi <a href="https://twitter.com/jacintofleta"><b><u>twitter</u></b></a>. Y esta es mi newsletter donde aprendo a golpes a montar proyectos rentables (escribo solo cuando tengo algo que contar):
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
        </Box>
    )
}

export default Follow
