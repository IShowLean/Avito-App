import React, { useEffect } from "react";
import Header from "../Header";
import Advertisements from "../Advertisements";
import { Alert, Snackbar } from "@mui/material";
import { useLocation } from "react-router-dom";

const MainPage = ({
    snackbar,
    setSnackbar,
    isLoading,
    search,
    setSearch,
    filter,
    setFilter,
    data,
}) => {
    const location = useLocation();

    // Получение данных от формы для отображения снек-бара на главной странице
    useEffect(() => {
        if (location.state?.message) {
            setSnackbar({
                open: true,
                message: location.state.message,
                severity: location.state.severity,
            });
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <div>
            <Header
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
            />
            <Advertisements
                setSnackbar={setSnackbar}
                isLoading={isLoading}
                filter={filter}
                search={search}
                ads={data}
            />

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default MainPage;
