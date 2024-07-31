import { Flex, Text, Button, Card, Box, Grid, TextArea, Switch, Theme, TabNav, Tooltip, IconButton} from '@radix-ui/themes';
import { FaCirclePlus } from "react-icons/fa6";

export default function MyApp() {
  return (
  <Theme accentColor='indigo' radius='large' appearance='dark'>  
    <TabNav.Root>
      <TabNav.Link href="/">
        Account
      </TabNav.Link>
      <TabNav.Link href="/">Settings</TabNav.Link>
      <TabNav.Link href="/">Documents</TabNav.Link>
    </TabNav.Root>
    <Tooltip content="Add to library">
  <IconButton radius="full">
    <FaCirclePlus />
  </IconButton>
</Tooltip>
    <Box maxWidth="400px" py="290px" ml="290px">
      <Card size="1">
        <Flex direction="column" gap="3">
          <Grid gap="1">
            <Text as="div" weight="bold" size="2" mb="1">
              Feedback
            </Text>
            <TextArea placeholder="Write your feedback…" />
          </Grid>
          <Flex asChild justify="between">
            <label>
              <Text color="gray" size="2">
                Attach screenshot?
              </Text>
              <Switch size="1" defaultChecked />
            </label>
          </Flex>
          <Grid columns="2" gap="2">
            <Button variant="surface">Back</Button>
            <Button>Send</Button>
          </Grid>
        </Flex>
      </Card>
    </Box>
  </Theme>

  );
}