import "@fontsource/roboto";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Form from "./components/pages/Form";
import MainPage from "./components/pages/MainPage";
import PageSelector from "./components/pages/PageSelector";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    // Запрос объявлений
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("http://localhost:3000/items");
                setData(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/list" />}></Route>
                    <Route
                        path="/list"
                        element={
                            <MainPage
                                snackbar={snackbar}
                                setSnackbar={setSnackbar}
                                isLoading={isLoading}
                                search={search}
                                setSearch={setSearch}
                                filter={filter}
                                setFilter={setFilter}
                                data={data}
                            />
                        }
                    ></Route>
                    <Route
                        path="/form"
                        element={
                            <Form
                                snackbar={snackbar}
                                setSnackbar={setSnackbar}
                                setData={setData}
                            />
                        }
                    ></Route>
                    <Route path="/list/:id" element={<PageSelector />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
