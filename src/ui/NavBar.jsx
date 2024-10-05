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
const nav = ["home", "about me", "experience", "projects", "blog", "contact"];
function NavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const width = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box>
      <AppBar position="fixed" className="min-h-[10vh] !bg-primary">
        <Toolbar className="h-full justify-between p-3 lg:justify-around">
          <Logo />
          {width ? (
            <IconButton onClick={() => setOpen((prev) => !prev)}>
              <Menu />
            </IconButton>
          ) : (
            <Box className="flex justify-between lg:w-2/4">
              {nav.map((item) => (
                <Button key={item} className="!capitalize lg:!text-lg">
                  {item}
                </Button>
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
            <ListItemButton key={item} className="!p-4 font-light capitalize">
              {item}
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NavBar;
