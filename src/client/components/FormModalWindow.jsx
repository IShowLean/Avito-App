import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";

const FormModalWindow = ({ openModal, setOpenModal, handleDelete }) => {
    return (
        <Dialog open={openModal}>
            <DialogTitle variant="h5" fontWeight="bold" color="info">
                Подтвердите удаление
            </DialogTitle>
            <DialogContent>
                <Typography>
                    Вы уверены, что хотите удалить объявление? Это действие
                    нельзя отменить.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="text"
                    onClick={() => setOpenModal(false)}
                >
                    Отмена
                </Button>
                <Button
                    onClick={handleDelete}
                    color="error"
                    variant="contained"
                >
                    Да, удалить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FormModalWindow;
