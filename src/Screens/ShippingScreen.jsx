import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { Navigate } from 'react-router-dom';

export default function ShippingScreen({
  shippingAddress,
  setShippingAddress,
  handleStepChange,
  
}) {
  const handleInputChange = (fieldName, value) => {
    setShippingAddress({ ...shippingAddress, [fieldName]: value });
  };
  return (
    <form style={{ margin: "50px 100px" }}>
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
          onChange={(e) => handleInputChange("name", e.target.value)}
       
        />
        <TextInput
          label="Phone"
          placeholder="Your phone number"
          name="phone"
          variant="filled"
          onChange={(e) => handleInputChange("phone", e.target.value)}
       
        />
        <TextInput
          label="City"
          placeholder="City"
          name="city"
          variant="filled"
          onChange={(e) => handleInputChange("city", e.target.value)}
       
        />
        <TextInput
          label="Zip code"
          placeholder="zip code"
          name="zipcode"
          variant="filled"
          onChange={(e) => handleInputChange("zipcode", e.target.value)}
       
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
        onChange={(e) => handleInputChange("address", e.target.value)}
      
      />

      <Group position="center" mt="xl">
        <Button
          type="submit"
          size="md"
          onClick={ Navigate('/payment')}
        >
          Proceed to Payment
        </Button>
      </Group>
    </form>
  );
}
