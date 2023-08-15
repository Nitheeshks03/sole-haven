import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
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

function WishListCard({ product: { _id, image, name, description, price, rating }}) {
  const { classes } = useStyles();
  return (
    <Card
      withBorder
      radius="md"
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
    
        <Card.Section>
          <Image src={image[0]} alt={name} height={220} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text fz="lg" fw={500}>
              {name}
            </Text>
            <Badge size="sm">{rating}⭐</Badge>
          </Group>
          <Text fz="sm" mt="xs" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Text fz="24px" fw={500}>
            ₹{price}
          </Text>
        </Card.Section>
      <Group mt="xs">
        <Button radius="md" variant="outline" style={{ flex: 1 }}>
          View Product
        </Button>
      </Group>
    </Card>
  );
}

export default WishListCard;
