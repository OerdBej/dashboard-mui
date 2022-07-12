import { Box, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../../components/../static/HeroImage.jpg";

const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 800 }}>
        Bicycle <b style={{ color: "green" }}>Blog</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        {" "}
        We are here to make you get the best bicycles in town
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100",
        }}
      ></Box>
    </Box>
  );
};

export default Hero;
