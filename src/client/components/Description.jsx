import React from "react";
import { Box, Grid2, Typography } from "@mui/material";

const Description = ({ data }) => {
    return (
        <Grid2
            size={8}
            sx={{
                backgroundColor: "rgba(0,0,0,0.08)",
                borderRadius: 3,
                width: "100%",
                height: "auto",
            }}
        >
            <Box m={2}>
                <Typography fontWeight="bold" variant="h5">
                    Описание
                </Typography>
                <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                    {data.description}
                </Typography>
            </Box>
        </Grid2>
    );
};

export default Description;
