import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          component="div"
        >
          <Box>
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          {/* The parent of the links was inline-block: Display Flex */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "red" }}
            >
              Categories
            </Typography>
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
          <Box>
            <Typography>Buttons</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
