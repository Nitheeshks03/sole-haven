import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function ShippingScreen() {
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      city: "",
      Zipcode: "",
      address: "",
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})} style={{ margin: "50px 100px" }}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({
          fontFamily: `Open Sans, ${theme.fontFamily}`,
        })}
        weight={500}
        align="center"
      >
        Shipping Address
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Phone"
          placeholder="Your phone number"
          name="email"
          variant="filled"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="City"
          placeholder="City"
          name="city"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <TextInput
          label="Zip code"
          placeholder="zip code"
          name="zipcode"
          variant="filled"
          {...form.getInputProps("subject")}
        />
      </SimpleGrid>

      <Textarea
        mt="md"
        label="Address"
        placeholder="Your address"
        maxRows={10}
        minRows={5}
        autosize
        name="address"
        variant="filled"
        {...form.getInputProps("message")}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Proceed to Payment
        </Button>
      </Group>
    </form>
  );
}
