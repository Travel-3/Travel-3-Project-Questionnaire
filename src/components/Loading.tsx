import { Box, HStack, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";

function Loading() {
  return (
    <Box
      bgImage={"/assets/images/background.png"}
      bgSize={"cover"}
      bgRepeat={"repeat-y"}
      w={"100vw"}
      h={"100vh"}
    >
      <Stack
        w={"100vw"}
        h={"100vh"}
        bgGradient={
          "linear(transparent 0%, transparent 80%, rgba(255,0,0,0.5) 90%, rgba(255,0,0,0.7) 95%, rgba(255,0,0,0.9) 100%, rgba(255,0,0,1) 100%)"
        }
        spacing={0}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack p={6} width={"100%"} mb={24}>
          <Img
            boxSize={12}
            objectFit={"contain"}
            src="/assets/images/small_logo_1.png"
            alt="logo"
          />
          <Spacer />
          <Img
            boxSize={12}
            objectFit={"contain"}
            src="/assets/images/small_logo_2.png"
            alt="logo"
          />
        </HStack>
        <Img
          // src={'/assets/images/travel_buddies.gif'}
          src="/assets/images/wave.png"
          boxSize={"24"}
          objectFit={"cover"}
          alt="Loading"
          mb={4}
        />
        <Text
          width={"fill"}
          textAlign={"center"}
          fontSize={"lg"}
          color={"black"}
        >
          loading...
        </Text>
        <Spacer />
        <Footer />
      </Stack>
    </Box>
  );
}

export default Loading;
