import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CarDetail from "./pages/CarDetail";
import CarList from "./pages/CarList"

const RouteApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route path="car-list" element={<CarList />} />
                        <Route path="car-list/car/:id" element={<CarDetail />} />
                    </Route>
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteApp;