import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import "@fontsource/roboto/700.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import { cat } from "../constants/cat";
import { useNavigate } from "react-router-dom";

const Card = ({ cardData }) => {
    const navigate = useNavigate();

    return (
        <Grid2 size={4}>
            <Box
                sx={{
                    padding: 1.5,
                    backgroundColor: "rgba(0,0,0,0.08)",
                    borderRadius: 3,
                }}
            >
                <img
                    src={cardData.image || cat}
                    alt="Объявление"
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                />
                <Box sx={{ padding: 1 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: 0.5,
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {cardData.name}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            marginBottom: 0.5,
                        }}
                    >
                        <LocationOnIcon
                            fontSize="small"
                            sx={{ color: "gray" }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                color: "gray",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {cardData.location}
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                        <CategoryIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography
                            variant="body2"
                            sx={{
                                color: "gray",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {cardData.type}
                        </Typography>
                    </Box>
                </Box>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                    onClick={() => navigate(`/list/${cardData.id}`)}
                >
                    Открыть
                </Button>
            </Box>
        </Grid2>
    );
};

export default Card;
