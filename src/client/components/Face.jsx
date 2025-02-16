import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { cat } from "../constants/cat";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";

const Face = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Grid2 sx={{ width: "100%" }}>
            <Grid2 size={8} sx={{ width: "100%", height: "auto" }}>
                <Button
                    onClick={() => navigate(-1)}
                    color="primary"
                    variant="outlined"
                    sx={{ my: 1 }}
                >
                    <ArrowBackIcon />
                </Button>
                <Typography
                    fontWeight="bold"
                    variant="h3"
                    sx={{ wordWrap: "break-word" }}
                >
                    {data.name}
                </Typography>
            </Grid2>

            <Grid2 my={1.5} size={8} sx={{ width: "100%", height: "auto" }}>
                <img
                    src={data.image || cat}
                    alt="Фото объявления"
                    style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                />
            </Grid2>

            <Grid2 sx={{ width: "100%" }} container justifyContent="flex-end">
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                        color="primary"
                        variant="outlined"
                        startIcon={<EditIcon />}
                        component={Link}
                        to="/form"
                        state={{ item: data }}
                        sx={{ textTransform: "none", whiteSpace: "nowrap" }}
                    >
                        Редактировать
                    </Button>
                </Box>
            </Grid2>
        </Grid2>
    );
};

export default Face;
