import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../axiosInstance";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";


export function CreateProductScreen() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id: productId } = useParams();
  const { data: product, isLoading,refetch } = useQuery(["product", productId], () =>
    axiosInstance.get(`/products/${productId}`).then((res) => res.data)
  );
  const [name, setName] = useState(product?.name);
  const [price, setPrice] = useState(product?.price);
  const [brand, setBrand] = useState(product?.brand);
  const [countInStock, setCountInStock] = useState(product?.countInStock);
  const [category, setCategory] = useState(product?.category);
  const [subCategory, setSubcategory] = useState(product?.subCategory);
  const [image, setImage] = useState(product?.image);
  const [description, setDescription] = useState(product?.description);

  const updatedProduct = {
    name,
    price,
    brand,
    countInStock,
    category,
    subCategory,
    image,
    description,
  };

  const updateProductMutation = useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: () =>
      axiosInstance
        .put(`/products/${productId}`, updatedProduct)
        .then((res) => res.data),
    onSuccess: () => {
        refetch();
      notifications.show({
        title: "Product Updated successfully",
        color: "green",
        autoClose: 1000,
        onClose: navigate("/admin/productslist"),
        icon: <IconCheck />,
      });
    },
    onError: () => {
      notifications.show({
        title: "Product Update failed",
        color: "red",
        autoClose: 1500,
        icon: <IconX />,
      });
    },
  });

  const handleUpdateProduct = () => {
    updateProductMutation.mutate();
    queryClient.invalidateQueries(["products"]);
  };

  return (
    <>
      {isLoading && (
        <Loader
          variant="bars"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50%",
          }}
        />
      )}
      <form style={{ margin: "0 400px" }}>
        <Title
          order={2}
          size="h3"
          sx={(theme) => ({ fontFamily: `Montserrat, ${theme.fontFamily}` })}
          weight={500}
          align="center"
        >
          Add Product Details
        </Title>

        <SimpleGrid
          cols={3}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <TextInput
            label="Name"
            placeholder="Product Name"
            variant="filled"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            label="Price"
            placeholder="Product Price"
            variant="filled"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextInput
            label="Brand"
            placeholder="Product Brand"
            variant="filled"
            required
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </SimpleGrid>

        <SimpleGrid
          cols={3}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <TextInput
            label="Count In Stock"
            placeholder="Product Count In Stock"
            variant="filled"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
          <TextInput
            label="Category"
            placeholder="Product Category"
            variant="filled"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextInput
            label="Sub-category"
            placeholder="Product subcategory"
            variant="filled"
            required
            value={subCategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <Textarea
            mt="md"
            label="Image"
            placeholder="Product Image"
            required
            maxRows={10}
            minRows={2}
            autosize
            variant="filled"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Textarea
            mt="md"
            label="Sizes"
            placeholder="Available sizes"
            maxRows={10}
            minRows={2}
            autosize
            variant="filled"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </SimpleGrid>

        <Textarea
          mt="md"
          label="Description"
          placeholder="Product Description"
          required
          maxRows={10}
          minRows={5}
          autosize
          variant="filled"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md" onClick={handleUpdateProduct}>
            Create Product
          </Button>
        </Group>
      </form>
    </>
  );
}

export default CreateProductScreen;
