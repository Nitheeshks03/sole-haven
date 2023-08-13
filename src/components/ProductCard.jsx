import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from "@mantine/core";
import { Link } from "react-router-dom";

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

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

function ProductCard({ image, title, description, rating, price, id , setCart}) {
  const { classes } = useStyles();

  return (
    <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={220} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text fz="lg" fw={500}>
              {title}
            </Text>
            <Badge size="sm">{rating}⭐</Badge>
          </Group>
          <Text fz="sm" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Text fz="24px" fw={500}>
            ₹{price}
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button radius="md" style={{ flex: 1 }}>
            Add To Cart
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Card>
    </Link>
  );
}

export default ProductCard;
