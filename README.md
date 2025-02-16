# 📌 Avito App

## 📖 Описание проекта
Web-приложение является упрощённым аналогом сервиса объявлений. 
Оно позволяет пользователям создавать, редактировать, удалять и просматривать объявления в различных категориях (недвижимость, авто, услуги).

## 💡 Обоснование выбора необязательных технологий
- **Material-UI**
    - Популярная библиотека готовых UI компонентов.
    - Включает в себя набор готовых компонентов, таких как кнопки, карточки, формы и модальные окна.
    - Упрощает создание адаптивных и стильных интерфейсов. Позволяет программисту больше сосредоточиться на функциональности Web-приложения и бизнес-логике, чем над написанием собственных интерфейсов. Ускоряет разработку.
- **React Hook Form**
    - Позволяет управлять формами и их валидацией с минимальными перерисовками компонентов.
    - Улучшает производительность по сравнению с обычным useState.
    - Прост в использовании и легко интегрируется с Yup.
- **Yup**
    - Мощная и гибкая библиотека для валидации данных.
    - Позволяет декларативно описывать схему валидации данных.
    - Интегрируется с React Hook Form, что делает код чище и удобнее.
    - Поддерживает сложные правила валидации.
- **Axios**
    - Популярная библиотека для работы с HTTP запросами.
    - Поддерживает интерцепторы запросов и ответов, что помогает обработке ошибок и аутентификации.
    - Удобнее и имеет больше возможностей по сравнению с fetch.
- **CORS**
    - Middleware для Express.js
    - Разрешает клиенту делать запросы к серверу с другого домена.
- **Prettier**
    - Инструмент форматирования кода.
    - Делает код читабельнее.
- **Docker**
    - Инструмент для контейнеризации приложений.
    - Позволяет запускать сервер и клиент в изолированных контейнерах.
    - Облегчает развертывание на любых системах без необходимости установки зависимостей.
- **ESLint**
    - Анализатор кода, который помогает находить и устранять ошибки в коде.
    - Улучшает читаемость и поддерживаемость кода.

## 🚀 Запуск проекта с помощью Docker

### 1. Установка зависимостей
Убедитесь, что у вас установлен Docker.
Склонируйте  репозиторий.

```sh
git clone https://github.com/IShowLean/Avito-App.git
cd Avito-App
```

### 2. Запуск Web-приложения
Чтобы запустить контейнеры, находясь в директории **avito** пропишите:
```sh
docker-compose -p avito up -d
```
Приложение запущено и доступно по адресу:
```
http://localhost:8080/
```

## 🛠 Запуск проекта по-классике

### 1. Установка зависимостей
Перед началом работы убедитесь, что у вас установлен **Node.js v20** и **npm**.  
Склонируйте репозиторий и установите зависимости:

```sh
git clone https://github.com/IShowLean/Avito-App.git
cd avito
npm install
```
### 2. Запуск сервера
Находясь в директории **avito** пропишите путь для **Node.js** к папке с сервером.
```sh
node ./src/server/app.js
```
Теперь сервер запущен на порту **3000** по умолчанию, если в переменные окружения не был передан другой порт.

**ВАЖНО!** <br/>
Клиент отправляет запросы только на сервер с портом 3000!

### 3. Запуск клиента
Находясь в другом терминале в директории **avito** пропишите:
```sh
npm start
```
Нажмите **Y** чтобы подтвердить запуск на порту, отличным от 3000 (им занят сервер).
Клиент запущен.
