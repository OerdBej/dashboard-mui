import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
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
  return (
    <AppBar>
      <StyledToolbar>
        <SocialBox>
          <TwitterIcon></TwitterIcon>
          <LinkedIn></LinkedIn>
          <Instagram></Instagram>
        </SocialBox>
        <Box>Menu</Box>
        <Box>Search</Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
