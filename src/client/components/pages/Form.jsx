import React, { useEffect, useState } from "react";
import { Alert, Box, Snackbar } from "@mui/material";
import RealEstateForm from "../RealEstateForm";
import CarForm from "../CarForm";
import { categories } from "../../constants/categories";
import ServicesForm from "../ServicesForm";
import "@fontsource/roboto/700.css";
import { schema } from "../../constants/formSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import FormHeader from "../FormHeader";
import BaseFormFields from "../BaseFormFields";
import FormModalWindow from "../FormModalWindow";
import FormFooter from "../FormFooter";

const Form = ({ snackbar, setSnackbar, setData }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const {
        register,
        setValue,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const location = useLocation();
    const editData = location.state?.item || null;
    const isEdit = editData !== null;
    const LOCAL_STORAGE_KEY = "formDraft";

    // Слежка за полями формы и сохранение их в LocalStorage при обновлении страницы
    useEffect(() => {
        const { unsubscribe } = watch((formValues) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formValues));
        });
        return () => unsubscribe();
    }, [watch]);

    // Заполнение формы сохраненными в LocalStorage данными
    useEffect(() => {
        const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedDraft && !isEdit) {
            reset(JSON.parse(savedDraft));
        }
    }, [reset, isEdit]);

    // Загрузка данных для редактирования
    useEffect(() => {
        if (isEdit) {
            const formattedData = Object.entries(editData).reduce(
                (acc, [key, value]) => {
                    if (key !== "id") {
                        acc[key] =
                            typeof value === "number" ? String(value) : value;
                    }
                    return acc;
                },
                {},
            );
            reset(formattedData);
            setUploadedImage(editData.image);
            setSelectedCategory(
                categories.find((obj) => obj.name === editData.type).id,
            );
        }
    }, []);

    // Создание объявления
    const onSubmit = async (data) => {
        try {
            if (isEdit) {
                await axios.put(
                    `http://localhost:3000/items/${editData.id}`,
                    data,
                );
                setSnackbar({
                    open: true,
                    message: "Объявление успешно обновлено!",
                    severity: "success",
                });
            } else {
                await axios.post("http://localhost:3000/items", data);
                navigate("/list", {
                    state: {
                        message: "Объявление успешно создано!",
                        severity: "success",
                    },
                });
            }
            const newData = await axios.get("http://localhost:3000/items");
            setData(newData.data);
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        } catch (err) {
            console.log(err);
            setSnackbar({
                open: true,
                message: "Ошибка при сохранении объявления!",
                severity: "error",
            });
        }
    };

    // Обработка загрузки изображения в форму
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            // Получение url-ссылки на фото.
            // Сервис размещает фото и возвращает объект со ссылкой. Таким образом картинку можно сохранять в базу.
            const response = await axios.post(
                "https://api.imgbb.com/1/upload",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    params: {
                        key: "f62fb6fd33a1f8c1d2d982ed909aaba6",
                    },
                },
            );

            const imageUrl = response.data.data.url;
            setValue("image", imageUrl);
            setUploadedImage(imageUrl);
        } catch (error) {
            console.error("Ошибка загрузки изображения:", error);
            setSnackbar({
                open: true,
                message: "Ошибка загрузки изображения!",
                severity: "error",
            });
        } finally {
            event.target.value = null;
        }
    };

    // Обработка удаления объявления
    // По ТЗ удаление не требовалось, но решил реализовать раз уж API сервера позволяет
    async function handleDelete() {
        try {
            await axios.delete(`http://localhost:3000/items/${editData.id}`);
            const newData = await axios.get("http://localhost:3000/items");
            setData(newData.data);
            navigate("/list", {
                state: {
                    message: "Объявление успешно удалено!",
                    severity: "success",
                },
            });
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        } catch (error) {
            console.log(error);
            setSnackbar({
                open: true,
                message: "Ошибка удаления объявления!",
                severity: "error",
            });
        }
    }

    // Генерация дополнительных полей в зависимости от категории объявления
    function renderCategoryForm() {
        switch (selectedCategory) {
            case 1:
                return (
                    <RealEstateForm
                        register={register}
                        control={control}
                        errors={errors}
                    />
                );
            case 2:
                return (
                    <CarForm
                        register={register}
                        control={control}
                        errors={errors}
                    />
                );
            case 3:
                return (
                    <ServicesForm
                        register={register}
                        control={control}
                        errors={errors}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                maxWidth: 600,
                mx: "auto",
                p: 3,
                borderRadius: "20px",
                border: "1px solid rgba(1, 1, 1, 0.1)",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
            }}
        >
            <FormHeader isEdit={isEdit} />

            <BaseFormFields
                register={register}
                errors={errors}
                handleImageUpload={handleImageUpload}
                uploadedImage={uploadedImage}
                setUploadedImage={setUploadedImage}
                setValue={setValue}
                control={control}
                setSelectedCategory={setSelectedCategory}
            />

            {renderCategoryForm()}

            <FormFooter isEdit={isEdit} setOpenModal={setOpenModal} />

            <FormModalWindow
                handleDelete={handleDelete}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />

            <Snackbar
                autoHideDuration={2000}
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                open={snackbar.open}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert
                    severity={snackbar.severity}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Form;
