import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EmojiEmotions } from "@mui/icons-material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  //   for using to toogle the button in order to make the switch from On/Off
  const openMenu = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px 0px",
          }}
          comp
          onent="div"
        >
          <Box>
            <IconButton>
              <EmojiEmotions
                sx={{
                  fontSize: "2.4rem",
                }}
              />
            </IconButton>
          </Box>
          {/* The parent of the links was inline-block: Display Flex */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              Home
            </Typography>

            {/* Brand */}

            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              Brand
            </Typography>

            {/* Here the functionalities */}
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Unisex</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              Men
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              Woman
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              FAQ
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#F99797" }}
              disableElevation
            >
              Account
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="success">
                <ShoppingCartIcon color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
