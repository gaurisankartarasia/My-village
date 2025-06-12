import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { navLinks } from "./config";

interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuItems, setMenuItems] = React.useState<DropdownItem[]>([]);

  const handleDropdownOpen = (
    e: React.MouseEvent<HTMLElement>,
    items: DropdownItem[]
  ) => {
    setMenuItems(items);
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar position="sticky" sx={{ boxShadow: 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: "inherit",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="span"
              sx={{
                ml: 1,
                fontFamily: '"IM Fell English SC", serif',
                fontSize: { xs: "1.5rem", md: "1.8rem", lg: "2rem" },
              }}
            >
              Badamba
            </Box>
          </Typography>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{
                "&:hover": {
                  backgroundColor: "ButtonFace",
                },
              }}
            >
              <span className="material-icons-outlined">menu</span>
            </IconButton>
          ) : (
            <Box>
              {navLinks.map((item) =>
                item.isDropdown && item.dropdownItems ? (
                  <Button
                    key={item.title}
                    color="inherit"
                    sx={{ fontSize: "1rem" }}
                    endIcon={
                      <span className="material-icons-outlined">
                        expand_more
                      </span>
                    }
                    onClick={(e) => handleDropdownOpen(e, item.dropdownItems!)}
                  >
                    {item.title}
                  </Button>
                ) : (
                  item.href && (
                    <Button
                      key={item.title}
                      color={
                        location.pathname === item.href ? "primary" : "inherit"
                      }
                      sx={{
                        fontSize: "1rem",
                        textDecoration:
                          location.pathname === item.href
                            ? "underline"
                            : "none",
                        textUnderlineOffset: "6px",
                        textDecorationThickness: "3px",
                        "&:hover": {
                          color: "text.secondary",
                          backgroundColor: "transparent",
                        },
                      }}
                      component={Link}
                      to={item.href}
                    >
                      {item.title}
                    </Button>
                  )
                )
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleMenuClose}>
        {menuItems.map((sub) => (
          <MenuItem
            key={sub.href}
            component={Link}
            to={sub.href}
            onClick={handleMenuClose}
          >
            <Box>
              <Typography>{sub.title}</Typography>
              <Typography variant="caption" color="text.secondary">
                {sub.description}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 280,
            backgroundColor: "#fff",
          },
        }}
      >
        <Toolbar />
        <List>
          {navLinks.map((item) =>
            item.isDropdown && item.dropdownItems ? (
              <Box key={item.title} sx={{ px: 2, py: 1 }}>
                <Typography variant="subtitle2">{item.title}</Typography>
                {item.dropdownItems.map((sub) => (
                  <ListItemButton
                    key={sub.href}
                    component={Link}
                    to={sub.href}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      "&:hover, &:active, &:focus": {
                        backgroundColor: "ButtonFace",
                      },
                      borderBottom: "0.5px solid",
                      borderColor: "divider",
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: "500" }}>
                          {sub.title}
                        </Typography>
                      }
                      secondary={sub.description}
                    />
                  </ListItemButton>
                ))}
              </Box>
            ) : (
              item.href && (
                <ListItemButton
                  key={item.href}
                  component={Link}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    "&:hover, &:active, &:focus": {
                      backgroundColor: "action.hover",
                    },
                    borderBottom: "0.5px solid",
                    borderColor: "divider",
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: "500" }}>
                        {item.title}
                      </Typography>
                    }
                  />
                  <span className="material-icons-outlined text-gray-500">
                    keyboard_arrow_right
                  </span>
                </ListItemButton>
              )
            )
          )}
        </List>
      </Drawer>
    </>
  );
}
