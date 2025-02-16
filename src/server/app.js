const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const ItemTypes = {
    REAL_ESTATE: "Недвижимость",
    AUTO: "Авто",
    SERVICES: "Услуги",
};

const app = express();

// Пришлось дописать чтобы сервер принимал запросы с других портов
// (у меня не принимал - CORS политика блочила)
app.use(cors());
app.use(bodyParser.json());

// In-memory хранилище для объявлений
// Заполнил статикой
let items = [
    {
        id: 100,
        type: ItemTypes.REAL_ESTATE,
        name: "Продам гараж",
        location: "Москва",
        propertyType: "Коттедж",
        area: "52",
        rooms: "2",
        price: "45000",
        description:
            "Просторный гараж. Подойдет для открытия своей мастерской. Недавно был ремонт.",
    },
    {
        id: 101,
        type: ItemTypes.SERVICES,
        name: "ПОДГОТОВКА К ЕГЭ ПО ГЕОГРАФИИ",
        location: "Санкт-Петербург",
        serviceType: "Образование и курсы",
        experience: "7",
        cost: "3500",
        description:
            "Подготовка к ЕГЭ по географии. Окончил геофак МГУ с красным дипломом. " +
            "Имею множество дипломов победителя международных олимпиад по географии." +
            "Чаовые занятия в Discord или Zoom",
    },
    {
        id: 102,
        type: ItemTypes.SERVICES,
        name: "Выгул животных",
        location: "Альметьевск",
        serviceType: "Животные",
        experience: "2",
        cost: "5000",
        workSchedule: "пн, ср, пт - с 12:00 до 18:00",
        description:
            "Люблю кошечек и собачек, поэтому если у вас нет достаточно времени чтобы уделять его прогулкам и заботе о " +
            "ваших любимцах, то могу помочь за копеечку)",
    },
    {
        id: 103,
        type: ItemTypes.AUTO,
        name: "Продам Porsche 911 GTS",
        location: "Los-Angeles",
        brand: "Porsche",
        model: "911 GTS",
        year: "2023",
        mileage: "20000",
        description:
            "Продаю порш. Цена договорная писать в лс. Не бит, не крашен, не краден. Доставки нет - приезжайте сами в Лос-Анжелес",
    },
];

const makeCounter = () => {
    let count = 0;
    return () => count++;
};

const itemsIdCounter = makeCounter();

// Создание нового объявления
app.post("/items", (req, res) => {
    const { name, description, location, type, ...rest } = req.body;

    // Validate common required fields
    if (!name || !description || !location || !type) {
        return res
            .status(400)
            .json({ error: "Missing required common fields" });
    }

    switch (type) {
        case ItemTypes.REAL_ESTATE:
            if (
                !rest.propertyType ||
                !rest.area ||
                !rest.rooms ||
                !rest.price
            ) {
                return res
                    .status(400)
                    .json({ error: "Missing required fields for Real estate" });
            }
            break;
        case ItemTypes.AUTO:
            if (!rest.brand || !rest.model || !rest.year) {
                return res
                    .status(400)
                    .json({ error: "Missing required fields for Auto" });
            }
            break;
        case ItemTypes.SERVICES:
            if (!rest.serviceType || !rest.experience || !rest.cost) {
                return res
                    .status(400)
                    .json({
                        error: "Missing required fields for ServicesForm",
                    });
            }
            break;
        default:
            return res.status(400).json({ error: "Invalid type" });
    }

    const item = {
        id: itemsIdCounter(),
        name,
        description,
        location,
        type,
        ...rest,
    };

    items.push(item);
    res.status(201).json(item);
});

// Получение всех объявлений
app.get("/items", (req, res) => {
    res.json(items);
});

// Получение объявления по его id
app.get("/items/:id", (req, res) => {
    const item = items.find((i) => i.id === parseInt(req.params.id, 10));
    if (item) {
        res.json(item);
    } else {
        res.status(404).send("Item not found");
    }
});

// Обновление объявления по его id
app.put("/items/:id", (req, res) => {
    const item = items.find((i) => i.id === parseInt(req.params.id, 10));
    if (item) {
        Object.assign(item, req.body);
        res.json(item);
    } else {
        res.status(404).send("Item not found");
    }
});

// Удаление объявления по его id
app.delete("/items/:id", (req, res) => {
    const itemIndex = items.findIndex(
        (i) => i.id === parseInt(req.params.id, 10),
    );
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send("Item not found");
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});