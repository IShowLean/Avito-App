import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Categories from "./Categories";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch, filter, setFilter }) => {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    marginTop: 2,
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ color: "black", marginRight: 2 }}
                >
                    Avito
                </Typography>
                <TextField
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    sx={{ width: "60%" }}
                    size="small"
                    label="Поиск по объявлениям..."
                    variant="outlined"
                />
                <Button
                    color="success"
                    variant="contained"
                    startIcon={<ArticleIcon />}
                    component={Link}
                    to="/form"
                    sx={{ textTransform: "none", whiteSpace: "nowrap" }}
                >
                    Разместить объявление
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Categories filter={filter} setFilter={setFilter} />
            </Box>
        </div>
    );
};

export default Header;
