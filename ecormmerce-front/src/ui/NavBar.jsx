import { useTheme } from "@emotion/react";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
const nav = ["home", "about", "projects", "blog", "contact"];
// const widths = {
//   home: -10,
//   about: 746,
//   projects: 1546,
//   blog: 3746,
//   contact: 4163,
// };
const widths = {
  home: -10,
  about: 639,
  projects: 1239,
  blog: 3439,
  contact: 4163,
};
function NavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const width = useMediaQuery(theme.breakpoints.down("lg"));
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(function () {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);
  // projects 1698 blog 3946 home 80 about 934 contact 4482

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
              {nav.map((item, index) => {
                const activeMenu =
                  index + 1 === nav.length
                    ? true
                    : scrollPosition < widths[nav[index + 1]];
                return (
                  <NavHashLink
                    smooth
                    to={`/#${item}`}
                    key={item}
                    className={`rounded-b-sm border-b-0 border-text p-4 !font-light !capitalize lg:!text-xl ${scrollPosition >= widths[item] && activeMenu ? "selected" : ""}`}
                  >
                    <span>{item}</span>
                  </NavHashLink>
                );
              })}
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
                className={`!p-4 font-light capitalize`}
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
