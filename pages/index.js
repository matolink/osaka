import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a self taught developer from Chile!
            </Box>
            <Box display = {{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Matías Gutiérrez
                    </Heading>
                    <p>
                        Digital Craftzman (artist/dev/desinger)
                    </p>
                </Box>
            </Box>
        </Container>
    )
}
export default Page