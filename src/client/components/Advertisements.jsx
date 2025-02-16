import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
    Box,
    CircularProgress,
    Grid2,
    Pagination,
    Typography,
} from "@mui/material";
import { categories } from "../constants/categories";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Advertisements = ({ isLoading, ads, search, filter }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Фильтр по типу объявления, затем по поисковой строке
    const filteredAds = ads
        .filter((item) => {
            const category = categories.find((obj) => obj.name === item.type);
            const id = category ? category.id : null;
            if (!filter) {
                return true;
            }
            return id === filter;
        })
        .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()),
        );

    // Установка текущий страницы для реализации пагинации
    useEffect(() => {
        setCurrentPage(1);
    }, [search, filter]);

    // Константы для реализации пагинации
    const adsPerPage = 5;
    const pages = Math.ceil(filteredAds.length / adsPerPage);
    const lastAdIdx = currentPage * adsPerPage;
    const firstAdIdx = lastAdIdx - adsPerPage;
    const adsForCurrentPage = filteredAds.slice(firstAdIdx, lastAdIdx);

    return (
        <div>
            {isLoading ? (
                <Box
                    my={8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress color="primary" size={60} />
                </Box>
            ) : !filteredAds.length ? (
                <Grid2
                    container
                    spacing={1}
                    sx={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <SentimentVeryDissatisfiedIcon
                        color="primary"
                        sx={{ fontSize: 90 }}
                    />
                    <Typography variant="h5" sx={{ color: "black" }}>
                        Посты не найдены{" "}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "gray", textAlign: "center" }}
                    >
                        Кажется, наш сервер не работает в данный момент, <br />{" "}
                        или постов просто нет.
                    </Typography>
                </Grid2>
            ) : (
                <>
                    <Grid2
                        container
                        spacing={3}
                        mx={2}
                        sx={{ marginTop: "15px" }}
                    >
                        {adsForCurrentPage.map((ad, idx) => (
                            <Card cardData={ad} key={idx} />
                        ))}
                    </Grid2>
                    <Box
                        m={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Pagination
                            page={currentPage}
                            onChange={(event, value) => {
                                setCurrentPage(value);
                            }}
                            shape="rounded"
                            variant="outlined"
                            count={pages}
                            color="primary"
                        />
                    </Box>
                </>
            )}
        </div>
    );
};

export default Advertisements;
