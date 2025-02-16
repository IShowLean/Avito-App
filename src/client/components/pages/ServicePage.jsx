import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Seller from "../Seller";
import Face from "../Face";
import Description from "../Description";

const ServicePage = ({ data }) => {
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
                    <Grid2 sx={{ width: "60%" }} size={4} m={2}>
                        <Typography fontWeight="bold" my={1} variant="h5">
                            Об услуге
                        </Typography>
                        <Typography
                            sx={{ color: "gray", wordWrap: "break-word" }}
                            variant="body1"
                        >
                            Тип услуги:{" "}
                            <Typography
                                component="span"
                                sx={{ color: "black" }}
                            >
                                {data.serviceType}
                            </Typography>
                        </Typography>
                        <Typography
                            sx={{ color: "gray", wordWrap: "break-word" }}
                            variant="body1"
                        >
                            Опыт работы:{" "}
                            <Typography
                                component="span"
                                sx={{ color: "black" }}
                            >
                                {data.experience} лет
                            </Typography>
                        </Typography>
                        {data.workSchedule && (
                            <Typography sx={{ color: "gray" }} variant="body1">
                                <Typography
                                    sx={{
                                        color: "gray",
                                        wordWrap: "break-word",
                                    }}
                                    variant="body1"
                                >
                                    График работы:{" "}
                                    <Typography
                                        component="span"
                                        sx={{ color: "black" }}
                                    >
                                        {data.workSchedule}
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
                        variant="h3"
                        sx={{
                            minWidth: "100%",
                            color: "black",
                            maxWidth: "100%",
                            textAlign: "center",
                            wordWrap: "break-word",
                        }}
                    >
                        {data.cost} ₽
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

export default ServicePage;
