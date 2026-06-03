import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  List,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { contactLinks, navItems, skillCards } from "./skills";

function SkillDetails({ skill }) {
  const SkillIcon = skill.icon;

  return (
    <Box
      bg="white"
      border="2px solid"
      borderColor="paper.200"
      rounded="2xl"
      p={{ base: "1.2rem", md: "1.8rem" }}
      boxShadow="0 12px 28px rgba(45, 37, 30, 0.13)"
      h="100%"
    >
      <HStack align="start" gap="1rem" mb="0.8rem">
        <Center
          w="54px"
          h="54px"
          rounded="xl"
          bg="linear-gradient(130deg, var(--chakra-colors-teal-700), var(--chakra-colors-teal-500))"
          color="white"
          flexShrink={0}
        >
          <Icon as={SkillIcon} boxSize="1.35rem" />
        </Center>
        <Box>
          <Text
            as="span"
            display="inline-block"
            rounded="full"
            px="0.6rem"
            py="0.2rem"
            fontSize="0.78rem"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.03em"
            bg="paper.200"
            color="accent.700"
            mb="0.35rem"
          >
            Skill
          </Text>
          <Heading size="md" textTransform="uppercase" color="ink.900" lineHeight="1.2">
            {skill.title}
          </Heading>
        </Box>
      </HStack>
      <Text color="ink.700" mb="1rem" lineHeight="1.55">
        {skill.summary}
      </Text>
      <List.Root gap="0.8rem" pl="1.15rem" styleType="disc" color="ink.900">
        {skill.items.map((item) => (
          <List.Item key={item} lineHeight="1.45" color="ink.700">
            {item}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}

function App() {
  const [activeSkillKey, setActiveSkillKey] = useState(skillCards[0].key);

  const activeSkill = useMemo(
    () => skillCards.find((card) => card.key === activeSkillKey) || skillCards[0],
    [activeSkillKey]
  );

  const years = new Date().getFullYear() - 2013;
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="radial-gradient(circle at top right, #fdf9f4 0%, var(--chakra-colors-paper-100) 45%, var(--chakra-colors-paper-200) 100%)">
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={30}
        bg="linear-gradient(120deg, var(--chakra-colors-ink-900), #2f2924)"
        boxShadow="sm"
      >
        <Container maxW="6xl" py="0.85rem">
          <Flex justify="space-between" align="center" gap="1rem">
            <Link href="#page-top" fontWeight="700" color="white" fontSize="lg" letterSpacing="0.02em">
              Thomas Helm
            </Link>
            <HStack gap="0.4rem" display={{ base: "none", md: "flex" }}>
              {navItems.map((item) => (
                <Button
                  as="a"
                  key={item.href}
                  href={item.href}
                  variant="ghost"
                  color="white"
                  _hover={{ bg: "whiteAlpha.200" }}
                  rounded="md"
                  size="sm"
                >
                  {item.label}
                </Button>
              ))}
            </HStack>
          </Flex>
          <HStack gap="0.25rem" display={{ base: "flex", md: "none" }} mt="0.7rem" flexWrap="wrap">
            {navItems.map((item) => (
              <Button
                as="a"
                key={`mobile-${item.href}`}
                href={item.href}
                variant="ghost"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                rounded="md"
                size="xs"
              >
                {item.label}
              </Button>
            ))}
          </HStack>
        </Container>
      </Box>

      <Box
        as="header"
        id="page-top"
        pt={{ base: "8.5rem", md: "9.2rem" }}
        pb={{ base: "4rem", md: "5.2rem" }}
        textAlign="center"
        color="white"
        position="relative"
        overflow="hidden"
        bg="linear-gradient(140deg, #25201c 0%, #3a3027 45%, var(--chakra-colors-teal-700) 100%)"
      >
        <Box
          position="absolute"
          top="-180px"
          right="-130px"
          w="460px"
          h="460px"
          rounded="full"
          bg="accent.500"
          opacity={0.22}
        />
        <Box
          position="absolute"
          bottom="-170px"
          left="-110px"
          w="360px"
          h="360px"
          rounded="full"
          bg="teal.500"
          opacity={0.22}
        />
        <Container maxW="4xl" position="relative" zIndex={2}>
          <Image
            src="/img/ProfileImage.JPG"
            alt="Thomas picture"
            mx="auto"
            mb="1.5rem"
            w={{ base: "180px", md: "220px" }}
            h={{ base: "180px", md: "220px" }}
            objectFit="cover"
            rounded="2xl"
            border="4px solid rgba(255, 255, 255, 0.5)"
            boxShadow="0 14px 32px rgba(0, 0, 0, 0.25)"
          />
          <Heading as="h1" textTransform="uppercase" mb="0.6rem" size={{ base: "2xl", md: "3xl" }}>
            Thomas Helm
          </Heading>
          <HStack justify="center" gap="0.5rem" fontSize={{ base: "1.05rem", md: "1.3rem" }}>
            <Text opacity={0.8}>Software</Text>
            <Text color="sand.400" fontSize="0.75em">
              •
            </Text>
            <Text fontWeight="700">Full Stack</Text>
            <Text color="sand.400" fontSize="0.75em">
              •
            </Text>
            <Text opacity={0.8}>Tools</Text>
          </HStack>
        </Container>
      </Box>

      <Container as="section" id="recent-project" maxW="6xl" py={{ base: "3rem", md: "4rem" }}>
        <Heading textAlign="center" textTransform="uppercase" color="ink.900" mb="1.8rem" size="2xl">
          Highlights
        </Heading>
        <Box
          bg="white"
          border="1px solid"
          borderColor="paper.200"
          rounded="xl"
          p={{ base: "1.2rem", md: "1.7rem" }}
          boxShadow="0 12px 28px rgba(45, 37, 30, 0.08)"
          maxW="5xl"
          mx="auto"
        >
          <Text
            as="span"
            display="inline-block"
            rounded="full"
            px="0.6rem"
            py="0.2rem"
            fontSize="0.78rem"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.03em"
            bg="paper.200"
            color="accent.700"
            mb="0.8rem"
          >
            Featured
          </Text>
          <Heading size="lg" mb="0.7rem">
            Lingolo
          </Heading>
          <Text mb="0.9rem" color="ink.700" lineHeight="1.55">
            Production teachers portal and student game for Lingolo focused on onboarding, classroom workflows, and
            immediate progress feedback.
          </Text>
          <Text mb="1rem" color="ink.700">
            <Text as="span" fontWeight="700" color="ink.900">
              Stack:
            </Text>{" "}
            React, Chakra UI, Firebase
          </Text>
          <List.Root styleType="disc" pl="1.15rem" gap="0.8rem" mb="1.2rem">
            <List.Item color="ink.700" lineHeight="1.45">
              <Text as="span" fontWeight="700" color="ink.900">
                Frontend:
              </Text>{" "}
              Built responsive React + Chakra UI flows for teacher dashboard and classroom engagement.
            </List.Item>
            <List.Item color="ink.700" lineHeight="1.45">
              <Text as="span" fontWeight="700" color="ink.900">
                Backend:
              </Text>{" "}
              Structured Firebase reads/writes and added admin workflows with Firebase Functions.
            </List.Item>
            <List.Item color="ink.700" lineHeight="1.45">
              <Text as="span" fontWeight="700" color="ink.900">
                Impact:
              </Text>{" "}
              Reduced outgoing bandwidth calls from 10 MB to 125 KB.
            </List.Item>
          </List.Root>
          <Button
            as="a"
            href="https://playlingolo.com/teachers"
            target="_blank"
            rel="noopener noreferrer"
            bg="accent.500"
            color="white"
            _hover={{ bg: "accent.700" }}
          >
            <Image
              src="/img/LingoloIcon.ico"
              alt="Lingolo icon"
              w="1.2rem"
              h="1.2rem"
              mr="0.5rem"
              filter="grayscale(1) brightness(0) invert(1)"
            />
            Visit Project
          </Button>
        </Box>
      </Container>

      <Container as="section" id="skills" maxW="6xl" py={{ base: "2rem", md: "3rem" }}>
        <Heading textAlign="center" textTransform="uppercase" color="ink.900" mb="2rem" size="2xl">
          Skills
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ lg: "1.9rem", xl: "2.2rem" }}
          display={{ base: "none", lg: "grid" }}
          gridTemplateColumns={{ lg: "minmax(0, 1.2fr) minmax(0, 1fr)", xl: "minmax(0, 1.35fr) minmax(0, 1fr)" }}
        >
          <SimpleGrid columns={{ lg: 1, xl: 2 }} gap={{ lg: "1rem", xl: "1.25rem" }}>
            {skillCards.map((skill) => {
              const isSelected = skill.key === activeSkillKey;
              const SkillIcon = skill.icon;

              return (
                <Box
                  as="button"
                  type="button"
                  key={skill.key}
                  w="100%"
                  p="0"
                  textAlign="left"
                  bg="transparent"
                  border="0"
                  cursor="pointer"
                  onClick={() => setActiveSkillKey(skill.key)}
                >
                  <Box
                    bg="white"
                    border="1px solid"
                    borderColor={isSelected ? "accent.500" : "paper.200"}
                    rounded="xl"
                    p="1.1rem"
                    boxShadow={
                      isSelected
                        ? "0 16px 30px rgba(45, 37, 30, 0.14)"
                        : "0 12px 28px rgba(45, 37, 30, 0.08)"
                    }
                    transform={isSelected ? "translateY(-2px)" : "none"}
                    transition="all 180ms ease"
                    _hover={{ transform: "translateY(-4px)", borderColor: "accent.500" }}
                  >
                    <Icon as={SkillIcon} boxSize="2rem" color="teal.500" mb="0.65rem" />
                    <Heading size="md" mb="0.35rem" color="ink.900">
                      {skill.title}
                    </Heading>
                    <Text fontSize="0.95rem" color="ink.700" lineHeight="1.4">
                      {skill.description}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
          <SkillDetails skill={activeSkill} />
        </SimpleGrid>

        <Stack gap="1rem" display={{ base: "flex", lg: "none" }}>
          {skillCards.map((skill) => (
            <SkillDetails key={skill.key} skill={skill} />
          ))}
        </Stack>
      </Container>

      <Box as="section" id="links" py={{ base: "3rem", md: "4rem" }} bg="linear-gradient(130deg, var(--chakra-colors-teal-700), var(--chakra-colors-teal-500))" color="white">
        <Container maxW="6xl" textAlign="center">
          <Heading textTransform="uppercase" mb="1rem" size="2xl">
            Live Work
          </Heading>
          <Text fontSize="lg" opacity={0.92} mb="1.8rem">
            Browse production apps and repositories.
          </Text>
          <HStack justify="center" gap="0.8rem" flexWrap="wrap">
            <Button
              as="a"
              href="https://playlingolo.com/teachers"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "teal.700" }}
            >
              <Image
                src="/img/LingoloIcon.ico"
                alt="Lingolo icon"
                w="1.2rem"
                h="1.2rem"
                mr="0.5rem"
                filter="grayscale(1) brightness(0) invert(1)"
              />
              Lingolo
            </Button>
            <Button
              as="a"
              href="https://github.com/NocturnalWisp"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "teal.700" }}
            >
              <Icon as={FaGithub} mr="0.5rem" />
              GitHub
            </Button>
          </HStack>
        </Container>
      </Box>

      <Container as="section" id="about" maxW="6xl" py={{ base: "3rem", md: "4rem" }}>
        <Heading textAlign="center" textTransform="uppercase" color="ink.900" mb="1.8rem" size="2xl">
          About
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="1.4rem">
          <Text fontSize="lg" lineHeight="1.65" color="ink.700">
            Thomas (T.J.) Helm is a full stack developer with {years} years building practical software products across
            passion projects, product teams, and large scale systems. Current focus: React frontends, Firebase backed
            services, and building software I am proud to use.
          </Text>
          <Text fontSize="lg" lineHeight="1.65" color="ink.700">
            Experience spans frontend systems, backend integration, performance optimization, and release quality.
            Available for collaboration, contracts, and full-time opportunities.
          </Text>
        </SimpleGrid>
      </Container>

      <Box as="footer" bg="ink.900" color="white" textAlign="center" py="2.5rem">
        <Container maxW="4xl">
          <Heading size="md" textTransform="uppercase" mb="1rem">
            Contact
          </Heading>
          <HStack justify="center" gap="0.6rem">
            {contactLinks.map((linkItem) => (
              <IconButton
                key={linkItem.href}
                as="a"
                href={linkItem.href}
                aria-label={linkItem.label}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                borderColor="whiteAlpha.600"
                color="white"
                _hover={{ bg: "white", color: "ink.900" }}
              >
                <Icon as={linkItem.icon} />
              </IconButton>
            ))}
          </HStack>
        </Container>
      </Box>

      <Box textAlign="center" py="1rem" bg="#171412" color="whiteAlpha.900">
        <Text fontSize="sm">© Thomas Helm {currentYear}</Text>
      </Box>
    </Box>
  );
}

export default App;
