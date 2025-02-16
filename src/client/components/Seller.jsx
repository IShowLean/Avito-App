import React from "react";
import { Avatar, Grid2, Typography } from "@mui/material";

const Seller = () => {
    return (
        <Grid2
            container
            m={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid2 xs={8}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Продавец
                </Typography>
                <Typography variant="body2" sx={{ color: "#1976d2" }}>
                    Пример Примеров
                </Typography>
                <Typography variant="body1" sx={{ color: "black" }}>
                    Частное лицо
                </Typography>
            </Grid2>
            <Grid2 marginX={1.5} container justifyContent="center">
                <Avatar
                    alt="Продавец"
                    src="https://ocdn.eu/pulscms-transforms/1/xeWk9kuTURBXy80ZjkxNWE0Mi0wNmZiLTQ2YTgtOWNlZS01Nzg5MjY0MTg4YTMuanBlZ5GVAs0DJQDDw94AAaEwBQ"
                    sx={{ width: 100, height: 100 }}
                />
            </Grid2>
        </Grid2>
    );
};

export default Seller;
