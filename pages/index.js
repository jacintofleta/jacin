import Head from 'next/head'
import { Container, Heading, Text, Box } from "@chakra-ui/react"
import Follow from '../components/Follow';
import Projects from '../components/Projects';

export default function Home() {

  return (
    <div >
      <Head>
        <title>Jacin</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9J0PV6JR5"></script>
        <script src="/ga.js" async></script>
      </Head>
    
      <Container mt={20} bg={"gray.900"}>
        <Heading >
          Hola, soy Jacin
        </Heading>
        <Text
        mt={8}
        letterSpacing="wide"
        >
          Quiero acabar con la opacidad en el mundo startup. Empezando por mi mismo. Estos son mis proyectos y sus resultados.
        </Text>
      
        <Projects />
      
        <Follow />

        <Box align="center" mb={12}>
          <Text>Made by <a href="https://twitter.com/jacintofleta" target="_blank"><u>Jacin</u></a></Text>
        </Box>
      
      </Container>
    </div>
  )
}
