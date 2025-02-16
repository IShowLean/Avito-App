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
import { services } from "../constants/services";
import { Controller } from "react-hook-form";

const ServicesForm = ({ register, control, errors }) => {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={6}>
                <FormControl
                    sx={{ width: "100%" }}
                    error={!!errors.serviceType}
                >
                    <InputLabel
                        sx={{ color: errors.serviceType ? "error.main" : "" }}
                        id="service-label"
                    >
                        Тип услуги
                    </InputLabel>
                    <Controller
                        name="serviceType"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                labelId="service-label"
                                id="service"
                                error={!!errors.serviceType}
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                label="Тип услуги"
                                variant="outlined"
                            >
                                {services.map((service, idx) => (
                                    <MenuItem key={idx} value={service}>
                                        {service}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                    {errors.serviceType && (
                        <Typography variant="caption" color="error">
                            {errors.serviceType.message}
                        </Typography>
                    )}
                </FormControl>
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("experience")}
                    error={!!errors.experience}
                    helperText={errors.experience?.message}
                    fullWidth
                    variant="outlined"
                    label="Опыт работы"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    лет
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Grid2>

            <Grid2 size={6}>
                <TextField
                    {...register("cost")}
                    error={!!errors.cost}
                    helperText={errors.cost?.message}
                    fullWidth
                    variant="outlined"
                    label="Стоимость"
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

            <Grid2 size={6}>
                <TextField
                    {...register("workSchedule")}
                    error={!!errors.workSchedule}
                    helperText={errors.workSchedule?.message}
                    fullWidth
                    variant="outlined"
                    label="График работы"
                />
            </Grid2>
        </Grid2>
    );
};

export default ServicesForm;
