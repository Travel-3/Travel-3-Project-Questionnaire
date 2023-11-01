import {
  Flex,
  Button,
  Container,
  Icon,
  Link,
  Spacer,
  Stack,
  Text,
  Image,
  HStack,
  AspectRatio,
} from "@chakra-ui/react";
import ReactCurvedText from "react-curved-text";

export default function Home() {
  return (
    <>
      <Container maxW={"container.xl"}>
        <AspectRatio ratio={1080 / 2074} w={"100vw"} h={"100vh"}>
          <Image
            w={"100%"}
            objectFit={"cover"}
            src="/assets/images/background.png"
            alt="background"
          />
        </AspectRatio>

        <Stack p={8}>
          <Stack
            width={"100%"}
            justifyContent={"center"}
            textAlign={"center"}
            spacing={0}
            mb={16}
          >
            <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}>
              <ReactCurvedText
                width={300}
                height={40}
                cx={150}
                cy={50}
                rx={100}
                ry={30}
                startOffset={13}
                reversed={true}
                text="發掘你不為人知的"
                textProps={{ style: { fontSize: 24 } }}
              />
            </Flex>
            <HStack mb={8} justifyContent={"center"} alignItems={"center"}>
              <Image
                h={8}
                src="/assets/images/cat_footprint_left.png"
                alt="logo"
              />
              <Text mx={2} fontSize={"4xl"}>
                性格貓貓
              </Text>
              <Image
                h={8}
                src="/assets/images/cat_footprint_right.png"
                alt="logo"
              />
            </HStack>
            <Image
              w={"100%"}
              objectFit={"contain"}
              src="/assets/images/2023logo.png"
              alt="logo"
            />
          </Stack>
          <Spacer />
          <Stack justifyContent={"center"} textAlign={"center"} spacing={0}>
            <Text fontSize={"lg"}>一起來看看隱藏</Text>
            <Text fontSize={"lg"}>在你心中的貓貓性格吧！</Text>
          </Stack>
          <Spacer />
          <Stack justifyContent={"center"} textAlign={"center"}>
            <Button
              as={Link}
              color={"white"}
              border={"none"}
              variant="outline"
              href="/grandprix/questionnaire"
              bgColor={"black"}
              size="lg"
              w="80%"
              mx={"auto"}
              fontSize={"3xl"}
              fontWeight={"normal"}
              mb={4}
            >
              START
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}