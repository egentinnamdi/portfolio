import { useTheme } from "@emotion/react";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Logo from "./Logo";
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
const nav = ["home", "about me", "experience", "projects", "contact"];
function NavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const width = useMediaQuery(theme.breakpoints.down("lg"));
  const [current, setCurrent] = useState(false);

  return (
    <Box>
      <AppBar position="fixed" className="min-h-[10vh] !bg-primary">
        <Toolbar className="h-full justify-between py-7 lg:justify-around">
          <Logo />
          {width ? (
            <IconButton onClick={() => setOpen((prev) => !prev)}>
              <Menu />
            </IconButton>
          ) : (
            <Box className="flex justify-between lg:w-2/4">
              {nav.map((item) => (
                <NavHashLink
                  smooth
                  to={`/#${item}`}
                  key={item}
                  className={`p-4 !capitalize lg:!text-lg ${current ? "current" : ""}`}
                >
                  <span onClick={() => setCurrent(true)}>{item}</span>
                </NavHashLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="!w-2/4"
        classes={{
          paper: "w-2/4",
        }}
      >
        <List component="ul">
          {nav.map((item) => (
            <NavHashLink to={`#${item}`}>
              <ListItemButton
                onClick={() => setOpen(false)}
                key={item}
                className="!p-4 font-light capitalize"
              >
                {item}
              </ListItemButton>
            </NavHashLink>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NavBar;
