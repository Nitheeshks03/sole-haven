import { createStyles, SegmentedControl, rem } from "@mantine/core";
import { cartDispatchContext } from '../contexts/cartContext';
import { useContext, useState } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: "pink", to: "orange" }),
  },

  control: {
    border: "0 !important",
  },

  label: {
    "&, &:hover": {
      "&[data-active]": {
        color: theme.white,
      },
    },
  },
}));

function SizeSelector() {
  const dispatch = useContext(cartDispatchContext);
  const [size, setSize] = useState("6");
  const handleSizeChange = (value) => {
    setSize(value);
     dispatch({type:'SIZE',payload:value})              };
  const { classes } = useStyles();
  
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={["6", "7", "8", "9", "10",'11','12']}
      classNames={classes}
      value={size}
      onChange={handleSizeChange}
      
    />
  );
}

export default SizeSelector;
