import React from "react";
import { Box, Button } from "@mui/material";

const FormFooter = ({ isEdit, setOpenModal }) => {
    return (
        <Box sx={{ display: "flex", width: "100%" }} gap={3}>
            <Button
                type="submit"
                fullWidth={!isEdit}
                color="success"
                variant="contained"
                sx={{ width: isEdit ? "50%" : "100%", textTransform: "none" }}
            >
                {isEdit ? "Применить" : "Создать"}
            </Button>
            {
                // По ТЗ удаление не требовалось, но решил реализовать раз уж API сервера позволяет
                isEdit && (
                    <Button
                        color="error"
                        onClick={() => setOpenModal(true)}
                        variant="contained"
                        sx={{ width: "50%", textTransform: "none" }}
                    >
                        {isEdit && "Удалить объявление"}
                    </Button>
                )
            }
        </Box>
    );
};

export default FormFooter;
