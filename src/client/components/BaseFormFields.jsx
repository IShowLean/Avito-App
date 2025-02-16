import React from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";
import { categories } from "../constants/categories";

const BaseFormFields = ({
    register,
    errors,
    handleImageUpload,
    uploadedImage,
    setUploadedImage,
    setValue,
    control,
    setSelectedCategory,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                width: "100%",
            }}
        >
            <TextField
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                variant="outlined"
                label="Название"
            />

            <TextField
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                label="Описание"
            />

            <TextField
                {...register("location")}
                error={!!errors.location}
                helperText={errors.location?.message}
                fullWidth
                variant="outlined"
                label="Локация"
            />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                }}
            >
                <Button
                    variant="contained"
                    component="label"
                    sx={{ textTransform: "none", flexShrink: 0 }}
                >
                    Выбрать фото
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageUpload}
                    />
                </Button>

                {uploadedImage && (
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                        <CloseIcon
                            onClick={() => {
                                setUploadedImage(null);
                                setValue("image", null);
                            }}
                            sx={{
                                position: "absolute",
                                right: -10,
                                top: -10,
                                backgroundColor: "rgba(0,0,0,0.5)",
                                color: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                },
                                p: 0.5,
                            }}
                        />
                        <img
                            src={uploadedImage}
                            alt="Превью"
                            style={{
                                width: 200,
                                borderRadius: 10,
                                display: "block",
                            }}
                        />
                    </Box>
                )}
            </Box>

            <FormControl sx={{ width: "30%" }} error={!!errors.type}>
                <InputLabel id="category-label">Категория</InputLabel>
                <Controller
                    name="type"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Выберите категорию" }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            labelId="category-label"
                            label="Категория"
                            id="category"
                            variant="outlined"
                            fullWidth
                            onChange={(event) => {
                                field.onChange(event);
                                setSelectedCategory(
                                    categories.find(
                                        (obj) =>
                                            obj.name === event.target.value,
                                    )?.id,
                                );
                            }}
                        >
                            {categories.map((cat) => {
                                if (cat.id !== 0)
                                    return (
                                        <MenuItem key={cat.id} value={cat.name}>
                                            {cat.name}
                                        </MenuItem>
                                    );
                            })}
                        </Select>
                    )}
                />
                <Typography variant="caption" color="error">
                    {errors.type?.message}
                </Typography>
            </FormControl>
        </Box>
    );
};

export default BaseFormFields;
