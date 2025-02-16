import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Seller from "../Seller";
import Face from "../Face";
import Description from "../Description";

const CarPage = ({ data }) => {
    return (
        <Grid2 container size={12} spacing={3} sx={{ m: 3 }}>
            <Grid2 container spacing={2} size={8}>
                <Face data={data} />

                <Grid2
                    container
                    size={8}
                    sx={{
                        backgroundColor: "rgba(0,0,0,0.08)",
                        borderRadius: 3,
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Grid2 size={4} m={2}>
                        <Typography fontWeight="bold" my={1} variant="h5">
                            Об автомобиле
                        </Typography>
                        <Typography
                            sx={{ color: "gray", wordWrap: "break-word" }}
                            variant="body1"
                        >
                            Марка:{" "}
                            <Typography
                                component="span"
                                sx={{ color: "black" }}
                            >
                                {data.brand}
                            </Typography>
                        </Typography>
                        <Typography
                            sx={{ color: "gray", wordWrap: "break-word" }}
                            variant="body1"
                        >
                            Модель:{" "}
                            <Typography
                                component="span"
                                sx={{ color: "black" }}
                            >
                                {data.model}
                            </Typography>
                        </Typography>
                        <Typography sx={{ color: "gray" }} variant="body1">
                            <Typography
                                sx={{ color: "gray", wordWrap: "break-word" }}
                                variant="body1"
                            >
                                Год выпуска:{" "}
                                <Typography
                                    component="span"
                                    sx={{ color: "black" }}
                                >
                                    {data.year}
                                </Typography>
                            </Typography>
                        </Typography>
                        {data.mileage !== null && (
                            <Typography sx={{ color: "gray" }} variant="body1">
                                <Typography
                                    sx={{
                                        color: "gray",
                                        wordWrap: "break-word",
                                    }}
                                    variant="body1"
                                >
                                    Пробег:{" "}
                                    <Typography
                                        component="span"
                                        sx={{ color: "black" }}
                                    >
                                        {data.mileage} км
                                    </Typography>
                                </Typography>
                            </Typography>
                        )}
                    </Grid2>

                    <Seller />
                </Grid2>

                <Description data={data} />
            </Grid2>

            <Grid2
                size={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    p={2}
                    sx={{
                        backgroundColor: "rgba(0,0,0,0.08)",
                        width: "100%",
                        maxWidth: 300,
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        my={2}
                        fontWeight="bold"
                        variant="h4"
                        sx={{
                            minWidth: "100%",
                            color: "black",
                            maxWidth: "100%",
                            textAlign: "center",
                            wordWrap: "break-word",
                        }}
                    >
                        Цена договорная
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ textTransform: "none", p: 4, borderRadius: 5 }}
                    >
                        <Typography variant="h5" size="small">
                            Написать продавцу
                        </Typography>
                    </Button>
                </Box>
            </Grid2>
        </Grid2>
    );
};

export default CarPage;
