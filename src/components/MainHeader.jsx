import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Badge,
  Tooltip,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { IconHeart, IconShoppingCart,IconSearch } from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import ProfileMenu from "./ProfileMenu";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function MainHeader() {
  const screenWidth = window.innerWidth;
  const [userInfo, setUserInfo] = useState("");
  const userName = userInfo ? userInfo.data.name : "";
  const { handleLoginOpen, handleRegisterOpen, isLoginOpen, isRegisterOpen } =
    useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(user);
  }, [isLoginOpen]);

  const { cartQty } = useContext(CartContext);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      {isLoginOpen && <LoginScreen />}
      {isRegisterOpen && <RegisterScreen />}
      {screenWidth > 871 && (
        <>
          <Box pb={80}>
            <Header height={60} px="md">
              <Group position="apart" sx={{ height: "100%" }}>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h1
                    style={{
                      margin: "0",
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: "normal",
                    }}
                  >
                    Sole Haven
                  </h1>
                </Link>

                <Group sx={{ height: "100%" }} spacing={0}>
                  <Link to={"/"} className={classes.link}>
                    Home
                  </Link>
                  <Link to={"/products/men"} className={classes.link}>
                    Men
                  </Link>
                  <Link to={"/products/women"} className={classes.link}>
                    Women
                  </Link>
                </Group>

                <Group className={classes.hiddenMobile}>
                  <IconSearch  color='grey'/>
                  <Link to={"/wishlist"}>
                    <Tooltip label="Wishlist" position="left">
                      <IconHeart
                        size="1.8rem"
                        color="grey"
                        className={classes.like}
                        stroke={1.2}
                      />
                    </Tooltip>
                  </Link>
                  <Link to={"/cart"}>
                    <Tooltip label="Cart" position="bottom">
                      <IconShoppingCart
                        size="1.8rem"
                        color="grey"
                        stroke={1.2}
                      />
                    </Tooltip>
                    <Badge>{cartQty}</Badge>
                  </Link>

                  {userInfo ? (
                    <ProfileMenu
                      setUserInfo={setUserInfo}
                      userInfo={userInfo}
                    />
                  ) : (
                    <>
                      <Button variant="default" onClick={handleLoginOpen}>
                        Log in
                      </Button>
                      <Button onClick={handleRegisterOpen} variant="gradient">
                        Sign up
                      </Button>
                    </>
                  )}
                </Group>
              </Group>
            </Header>
          </Box>
        </>
      )}

      {screenWidth < 870 && (
        <>
          <div className="mobile-header" style={{display:'flex',justifyContent:'space-between',paddingBottom:'50px'}}>
            <div className="mobile-header-left">
              <Burger opened={drawerOpened} onClick={toggleDrawer} />
              <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                padding="md"
                size={300}
                position="left"
              >
                <ScrollArea>
                  <Group direction="column" spacing="md">
                    <Link to={"/"} className={classes.link}>
                      Home
                    </Link>
                  </Group>
                </ScrollArea>
              </Drawer>
            </div>
            <div className="mobile-header-center" style={{textAlign:'center'}}>
              <h1 style={{fontSize:'24px',fontFamily:'Open Sans',fontWeight:'600',marginTop:'0'}}>Sole Haven</h1>
              </div>
            <div className="mobile-header-right" >
              <Link to={"/wishlist"}>
                <IconHeart color='skyblue' stroke={1.3} />
              </Link>
              <Link to={"/cart"}>
                <IconShoppingCart  color='blue' style={{paddingLeft:'20px'}}  stroke={1.3} />
                <Badge>{cartQty}</Badge>
              </Link>
              </div>
                

          </div>
        </>
      )}
    </>
  );
}
