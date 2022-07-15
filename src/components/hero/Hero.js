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
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ backgroundColor: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomoto" align="center" pt={8}>
              Trending bikes
            </Typography>
            <Typography variant="h4" align="center">
              Life is riding a bicycle
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              We love bicycles
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
