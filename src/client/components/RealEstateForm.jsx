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
import { realEstateTypes } from "../constants/realEstateTypes";
import { Controller } from "react-hook-form";

const RealEstateForm = ({ register, control, errors }) => {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={6}>
                <FormControl
                    sx={{ width: "100%" }}
                    error={!!errors.propertyType}
                >
                    <InputLabel
                        id="category-label"
                        sx={{ color: errors.propertyType ? "error.main" : "" }}
                    >
                        Тип Недвижимости
                    </InputLabel>
                    <Controller
                        name="propertyType"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Select
                                labelId="category-label"
                                id="category"
                                {...field}
                                value={field.value}
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                error={!!errors.propertyType}
                                label="Тип недвижимости"
                                variant="outlined"
                            >
                                {realEstateTypes.map((type, idx) => (
                                    <MenuItem key={idx} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                    {errors.propertyType && (
                        <Typography variant="caption" color="error">
                            {errors.propertyType.message}
                        </Typography>
                    )}
                </FormControl>
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("area")}
                    error={!!errors.area}
                    helperText={errors.area?.message}
                    fullWidth
                    variant="outlined"
                    label="Площадь"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    кв.м.
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("rooms")}
                    error={!!errors.rooms}
                    helperText={errors.rooms?.message}
                    fullWidth
                    variant="outlined"
                    label="Количество комнат"
                />
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("price")}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                    fullWidth
                    variant="outlined"
                    label="Цена"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    ₽
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Grid2>
        </Grid2>
    );
};

export default RealEstateForm;
