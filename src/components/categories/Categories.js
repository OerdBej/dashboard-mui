import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Focus from "../../components/../static/Focus.jpg";
import City from "../../components/../static/City.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});

const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  backgroundColor: "white",
  opacity: "0.8",
});

// 1.15 -> making responsivenes
const Categories = () => {
  return (
    <Box>
      <Stack direction={"row"} spacing={4} mt={5}>
        <StyledBox sx={{ backgroundImage: `url(${Focus})` }}>
          <StyledTypography align="center" variant="h3">
            Road
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${Focus})` }}>
          <StyledTypography align="center" variant="h3">
            City
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${Focus})` }}>
          <StyledTypography align="center" variant="h3">
            Accessories
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
