import { useState } from 'react'
import Head from 'next/head'
import { Container, Heading, Text, Box, Badge, Icon, Flex } from "@chakra-ui/react"
import projects from '../helpers/projects';
import { ChevronDownIcon, ChevronUpIcon, LinkIcon } from '@chakra-ui/icons'
import { IoRocketSharp, IoTime } from 'react-icons/io5';
import { FaMoneyCheckAlt } from 'react-icons/fa'

export default function Home() {

  const [numberOfProjects , setNumberOfProjects] = useState(5);
  const [openedProject, setOpenedProject] = useState(null);

  const manageOpenProject = (title) => {
    console.log("title", title)
    if(openedProject === title){
      setOpenedProject(null);
    } else {
      setOpenedProject(title);
    }
  }


  return (
    <div >
      <Head>
        <title>Jacin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Container mt={10} bg={"gray.900"}>
        <Heading >
          Hola, soy Jacin
        </Heading>
        <Text
        mt={5}
        letterSpacing="wide"
        >
          Quiero acabar con la opacidad en el mundo startup. Empezando por mi mismo. Estos son mis proyectos y sus resultados.
        </Text>
        {projects.map( (project, index) =>
        <Box
          maxW="full"
          mt={6}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          key={index}
          >
            <Box p={4} mb={1}>
              {/* TITLE */}
              <Box
                  mt="1"
                  cursor="pointer"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  onClick={() => manageOpenProject(project.title)}
                >
                  {project.title}
                  { openedProject === project.title ? <ChevronUpIcon  ml={1}/> : <ChevronDownIcon  ml={1}/> }
              </Box>

              {/* STATE */}
              <Box d="flex" mt="2" alignItems="baseline">
                  {
                  
                  project.state === "Sold" ?
                    <>
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        Sold
                      </Badge>
                      <Box
                        color="gray.400"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                      Sold for €{project.soldAmount}
                      </Box>
                    </>
                  : project.state === "Active" ? 
                    <>
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        Active
                      </Badge>
                        <Box
                        color="gray.300"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                      Revenue €{project.revenue}/month
                      </Box>
                    </>
                  : 
                  <Badge borderRadius="full" px="2" colorScheme="red">
                      Closed
                  </Badge>
                  
                  }
              </Box>

              {/* VIEW MORE SECTION */}
              { openedProject === project.title ?
              <>
                <Text
                  mt={4}
                  mb={4}
                  color="gray.300"
                  letterSpacing="wide"
                  fontSize="md"
                >
                  {project.description}
                </Text>


                <Box d="flex" mt="2" alignItems="baseline">
                  <Badge borderRadius="full" px="2">
                  <Icon as={IoRocketSharp}  backgroundColor="transparent">
                  </Icon>
                  </Badge>
                  <Box
                  color="gray.400"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  >
                  Launched {project.launched}
                  </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="baseline">
                  <Badge borderRadius="full" px="2">
                  <Icon as={IoTime}  backgroundColor="transparent">
                  </Icon>
                  </Badge>
                  <Box
                  color="gray.400"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  >
                  Time working on: {project.timeWorkingOn}
                  </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="baseline">
                  <Badge borderRadius="full" px="2">
                  <Icon as={FaMoneyCheckAlt}  backgroundColor="transparent">
                  </Icon>
                  </Badge>
                  <Box
                  color="gray.400"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  >
                  Profitable: {project.profitable}
                  </Box>
                </Box>
                
                {project.links ?
                <>
                    <Flex mt={4}>
                    { project.links.map(link =>
                        <Text as="u" color="gray.400" mr={3}>
                          <a target="_blank" href={link.url}><LinkIcon /> {link.name}</a>
                        </Text>
                    )}
                    </Flex>
                </>
                : null}
                
              </>

              : null}
            </Box>
        </Box>
          
        ).slice(0, numberOfProjects)}

        {numberOfProjects <= projects.length ?
        <Text align="right" cursor="pointer" mt={3} mb={5} onClick = {() => setNumberOfProjects(numberOfProjects + 3)}>
          View more
        </Text>
        :
          null
        }

      </Container>
    </div>
  )
}
