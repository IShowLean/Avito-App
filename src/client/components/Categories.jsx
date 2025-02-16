import React from "react";
import { categories } from "../constants/categories";
import { Button, hexToRgb } from "@mui/material";
import { avitoColors } from "../constants/avitoColors";

const Categories = ({ filter, setFilter }) => {
    // Покраска кнопок в цвета Авито
    const renderColor = (idx) => {
        const selectColor = avitoColors[idx % avitoColors.length];
        const { r, g, b } = hexToRgb(selectColor);

        return {
            textTransform: "none",
            margin: "5px",
            backgroundColor: idx === filter ? selectColor : "transparent",
            color: idx === filter ? "#fff" : selectColor,
            borderColor: selectColor,
            "&:hover": {
                backgroundColor: `rgba(${r}, ${g}, ${b}, 0.8)`,
                borderColor: `rgba(${r}, ${g}, ${b}, 0.8)`,
            },
        };
    };

    return (
        <div>
            {categories.map((cat, idx) => (
                <Button
                    key={idx}
                    variant={idx === filter ? "contained" : "outlined"}
                    onClick={() => setFilter(idx)}
                    sx={renderColor(idx)}
                >
                    {cat.name}
                </Button>
            ))}
        </div>
    );
};

export default Categories;
