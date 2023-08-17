import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
  rem,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "350px",
    marginTop: "20px",
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

function ProductCard({
  image,
  title,
  description,
  rating,
  price,
  id,
  product,
}) {
  const { handleWishList } = useContext(WishListContext);

  const { classes } = useStyles();

  return (
    <Card
      withBorder
      radius="sm"
      p="md"
      className={classes.card}
      sx={{
        "&:hover": {
          boxShadow: "0 0 6px 0 rgba(0,0,0,0.2)",
          scale: "1.02",
          transition: "all 0.1s ease-in",
        },
      }}
    >
      <Link
        to={`/products/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card.Section>
          <img
            style={{ width: "100%", objectFit: "cover" }}
            src={image}
            alt={title}
            height={220}
          />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text fz="lg" fw={500}>
              {title}
            </Text>
            <Badge size="sm">{rating}⭐</Badge>
          </Group>
          <Text
            fz="sm"
            mt="xs"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Text fz="20px" fw={500}>
            ₹{price}
          </Text>
        </Card.Section>
      </Link>

      <Group mt="xs">
        <Button
          radius="md"
          variant="outline"
          style={{ flex: 1 }}
          onClick={()=>handleWishList(product)}
        >
          Add to Wishlist
          <IconHeart
            size="1.1rem"
            style={{ marginLeft: "20px" }}
            className={classes.like}
            stroke={1.5}
          />
        </Button>
      </Group>
    </Card>
  );
}

export default ProductCard;
