import React, { useState } from 'react'
import projects from '../helpers/projects';
import { ChevronDownIcon, ChevronUpIcon, LinkIcon } from '@chakra-ui/icons'
import { IoRocketSharp, IoTime } from 'react-icons/io5';
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { Container, Heading, Text, Box, Badge, Icon, Flex } from "@chakra-ui/react"


const Projects = () => {

    const [numberOfProjects , setNumberOfProjects] = useState(6);
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
        <Box mt={14}>
            {projects.map( (project, index) =>
        <Box
          maxW="full"
          mt={10}
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
                      {project.revenue}
                      </Box>
                    </>
                  : 
                  <>
                    <Badge borderRadius="full" px="2" colorScheme="red">
                        {project.state}
                    </Badge>
                    <Box
                    color="gray.300"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    >
                    {project.revenue}
                    </Box>
                </>
                  
                  }
              </Box>

              {/* VIEW MORE SECTION */}
              { openedProject === project.title ?
              <>
                <Text
                  mt={6}
                  mb={6}
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
                <Box mt={6}>
                    { project.links.map(link =>
                    
                        <Text as="u" color="gray.400" mr={3}>
                          <a target="_blank" href={link.url}><LinkIcon /> {link.name}</a>
                        </Text>
                        
                    )}
                   
                </Box>
                : null}
                
              </>

              : null}
            </Box>
        </Box>
          
        ).slice(0, numberOfProjects)}

        {numberOfProjects < projects.length ?
        <Box align="center" mt={6}>
            <Icon
            w={30}
            h={30}
            fill="white"
            as={BsFillPlusCircleFill}
            cursor="pointer"
            mt={6}
            mb={6}
            onClick = {() => setNumberOfProjects(numberOfProjects + 3)}>
            </Icon>
        </Box>
        :
          null
        }
        </Box>
    )
}

export default Projects
