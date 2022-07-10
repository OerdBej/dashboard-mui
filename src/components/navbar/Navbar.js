import React from "react";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram, LinkedIn, Menu as MenuIcon } from "@mui/icons-material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });

  // An object in order to make the map() for each components.
  const MenuItems = [
    { Name: "Bikes", Link: "/" },
    { Name: "Choose your Bike", Link: "#" },
    { Name: "Clothing & Shoes", Link: "#" },
    { Name: "Book a Repair", Link: "#" },
  ];

  return (
    <AppBar sx={{ background: "black" }}>
      <StyledToolbar>
        <SocialBox>
          <TwitterIcon></TwitterIcon>
          <LinkedIn></LinkedIn>
          <Instagram></Instagram>
        </SocialBox>
        {/* conditions for responsive web design */}
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase
            placeholder="Search your bike.."
            sx={{
              color: "white",
            }}
          />
          <MenuIcon
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={true}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
