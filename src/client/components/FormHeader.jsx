import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Hints from "./Hints";
import { useNavigate } from "react-router-dom";

const FormHeader = ({ isEdit }) => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                }}
            >
                <Button
                    onClick={() => navigate(-1)}
                    color="primary"
                    variant="outlined"
                    sx={{ position: "absolute", left: 0, p: 0.5, minWidth: 40 }}
                >
                    <ArrowBackIcon />
                </Button>

                <Typography
                    variant="h4"
                    color="info"
                    sx={{ fontWeight: "700", mx: "auto", textAlign: "center" }}
                >
                    {isEdit
                        ? "Редактирование объявления"
                        : "Создание объявления"}
                </Typography>
            </Box>

            {isEdit || <Hints />}
        </Box>
    );
};

export default FormHeader;
