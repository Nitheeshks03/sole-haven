import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";


export function CreateProductScreen() {
const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [brand, setBrand] = useState('')
const [countInStock, setCountInStock] = useState('')
const [category, setCategory] = useState('')
const [subcategory, setSubcategory] = useState('')
const [image, setImage] = useState('')
const [description, setDescription] = useState('')


  return (
    <form onSubmit={onSubmit(() => {})}style={{margin:'0 400px'}} >
      <Title
        order={2}
        size="h3"
        sx={(theme) => ({ fontFamily: `Montserrat, ${theme.fontFamily}` })}
        weight={500}
        align="center"
      >
        Create Product
      </Title>

      <SimpleGrid cols={3} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput label="Name" placeholder="Product Name" variant="filled" />
        <TextInput label="Price" placeholder="Product Price" variant="filled" />
        <TextInput label="Brand" placeholder="Product Brand" variant="filled" />
      </SimpleGrid>

      <SimpleGrid cols={3} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="Count In Stock"
          placeholder="Product Count In Stock"
          variant="filled"
        />
        <TextInput
          label="Category"
          placeholder="Product Category"
          variant="filled"
        />
        <TextInput
          label="Sub-category"
          placeholder="Product subcategory"
          variant="filled"
        />
      </SimpleGrid>

      <Textarea
        mt="md"
        label="Image"
        placeholder="Product Image"
        maxRows={10}
        minRows={5}
        autosize
        variant="filled"
      />

      <Textarea
        mt="md"
        label="Description"
        placeholder="Product Description"
        maxRows={10}
        minRows={5}
        autosize
        variant="filled"
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Create Product
        </Button>
      </Group>
    </form>
  );
}

export default CreateProductScreen;
