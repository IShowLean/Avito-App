import * as yup from "yup";

export const schema = yup.object().shape({
    // Обязательные
    name: yup.string().required("Введите название"),
    description: yup.string().required("Введите описание"),
    location: yup.string().required("Укажите локацию"),
    image: yup.string().nullable().optional(),
    type: yup.string().required("Укажите категорию"),

    // Валидация для недвижимости
    propertyType: yup.string().when("type", {
        is: "Недвижимость",
        then: (schema) => schema.required("Укажите тип недвижимости"),
        otherwise: (schema) => schema.strip(),
    }),
    area: yup.number().when("type", {
        is: "Недвижимость",
        then: (schema) =>
            schema
                .transform((value, originalValue) =>
                    originalValue?.trim() === "" ? undefined : value,
                )
                .typeError("Введите площадь числом")
                .min(0, "Площадь не может быть отрицательной")
                .required("Укажите площадь"),
        otherwise: (schema) => schema.strip(),
    }),
    rooms: yup.number().when("type", {
        is: "Недвижимость",
        then: (schema) =>
            schema
                .transform((value, originalValue) =>
                    originalValue?.trim() === "" ? undefined : value,
                )
                .typeError("Введите количество комнат числом")
                .min(0, "Количество комнат не может быть отрицательным")
                .required("Укажите количество комнат"),
        otherwise: (schema) => schema.strip(),
    }),
    price: yup.number().when("type", {
        is: "Недвижимость",
        then: (schema) =>
            schema
                .transform((value, originalValue) =>
                    originalValue?.trim() === "" ? undefined : value,
                )
                .typeError("Введите цену числом")
                .min(0, "Цена не может быть отрицательной")
                .required("Укажите цену"),
        otherwise: (schema) => schema.strip(),
    }),

    // Валидация для авто
    brand: yup.string().when("type", {
        is: "Авто",
        then: (schema) => schema.required("Укажите марку автомобиля"),
        otherwise: (schema) => schema.strip(),
    }),
    model: yup.string().when("type", {
        is: "Авто",
        then: (schema) => schema.required("Укажите модель автомобиля"),
        otherwise: (schema) => schema.strip(),
    }),
    year: yup.number().when("type", {
        is: "Авто",
        then: (schema) =>
            schema
                .transform((value, originalValue) =>
                    originalValue?.trim() === "" ? undefined : value,
                )
                .typeError("Введите год числом")
                .max(
                    new Date().getFullYear(),
                    "Год выпуска не может быть больше текущего",
                )
                .min(0, "Год выпуска не может быть отрицательным")
                .required("Укажите год выпуска автомобиля"),
        otherwise: (schema) => schema.strip(),
    }),
    mileage: yup.number().when("type", {
        is: "Авто",
        then: (schema) =>
            schema
                .transform((value, originalValue) =>
                    originalValue?.trim() === "" ? null : value,
                )
                .nullable()
                .typeError("Введите пробег числом")
                .min(0, "Пробег не может быть отрицательным")
                .optional(),
        otherwise: (schema) => schema.strip(),
    }),

    // Валидация для услуг
    serviceType: yup.string().when("type", {
        is: "Услуги",
        then: (schema) => schema.required("Укажите тип услуги"),
        otherwise: (schema) => schema.strip(),
    }),
    experience: yup.number().when("type", {
        is: "Услуги",
        then: (schema) =>
            schema
                .transform((value, originalValue) =>
                    originalValue?.trim() === "" ? undefined : value,
                )
                .typeError("Введите опыт работы числом")
                .required("Укажите количество лет опыта")
                .min(0, "Опыт не может быть отрицательным"),
        otherwise: (schema) => schema.strip(),
    }),
    cost: yup.number().when("type", {
        is: "Услуги",
        then: (schema) =>
            schema
                .transform((value, originalValue) =>
                    originalValue?.trim() === "" ? undefined : value,
                )
                .typeError("Введите стоимость числом")
                .required("Укажите стоимость услуги")
                .min(0, "Стоимость не может быть отрицательной"),
        otherwise: (schema) => schema.strip(),
    }),
    workSchedule: yup.string().when("type", {
        is: "Услуги",
        then: (schema) => schema.optional(),
        otherwise: (schema) => schema.strip(),
    }),
});
