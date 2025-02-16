import React from "react";
import {
    FormControl,
    Grid2,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { carBrands } from "../constants/carBrands";
import { Controller } from "react-hook-form";

const CarForm = ({ register, control, errors }) => {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={6}>
                <FormControl sx={{ width: "100%" }} error={!!errors.brand}>
                    <InputLabel
                        sx={{ color: errors.brand ? "error.main" : "" }}
                        id="brand-label"
                    >
                        Марка
                    </InputLabel>
                    <Controller
                        name="brand"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                labelId="brand-label"
                                error={!!errors.brand}
                                id="brand"
                                label="Марка"
                                variant="outlined"
                            >
                                {carBrands.map((brand, idx) => (
                                    <MenuItem key={idx} value={brand}>
                                        {brand}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                    {errors.brand && (
                        <Typography variant="caption" color="error">
                            {errors.brand.message}
                        </Typography>
                    )}
                </FormControl>
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("model")}
                    error={!!errors.model}
                    helperText={errors.model?.message}
                    fullWidth
                    variant="outlined"
                    label="Модель"
                />
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("year")}
                    error={!!errors.year}
                    helperText={errors.year?.message}
                    fullWidth
                    variant="outlined"
                    label="Год выпуска"
                />
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("mileage")}
                    error={!!errors.mileage}
                    helperText={errors.mileage?.message}
                    fullWidth
                    variant="outlined"
                    label="Пробег"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    км
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Grid2>
        </Grid2>
    );
};

export default CarForm;
