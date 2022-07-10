import React from "react";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram, LinkedIn } from "@mui/icons-material";

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
        <MenuBox>
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
        </SearchBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
