import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarPage from "./CarPage";
import ServicePage from "./ServicePage";
import RealEstatePage from "./RealEstatePage";
import { Box, CircularProgress, Grid2, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const PageSelector = () => {
    const { id } = useParams();
    const [postData, setPostData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // Получение данных объявления
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `http://localhost:3000/items/${id}`,
                );
                setPostData(response.data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Рендер нужного типа страницы в зависимости от категории
    function selectPageByType() {
        switch (postData.type) {
            case "Недвижимость":
                return <RealEstatePage data={postData} />;
            case "Авто":
                return <CarPage data={postData} />;
            case "Услуги":
                return <ServicePage data={postData} />;
        }
    }

    return (
        <div>
            {isLoading ? (
                <Box
                    my={20}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress color="primary" size={60} />
                </Box>
            ) : Object.keys(postData).length === 0 ? (
                <Grid2
                    container
                    spacing={1}
                    sx={{
                        marginTop: 10,
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
                        Пост не найден{" "}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "gray", textAlign: "center" }}
                    >
                        Кажется, наш сервер не работает. <br /> Обновите
                        страницу или попробуйте позже.{" "}
                    </Typography>
                </Grid2>
            ) : (
                selectPageByType()
            )}
        </div>
    );
};

export default PageSelector;
