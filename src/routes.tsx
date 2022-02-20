import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from './style';
import Login from './Pages/Login';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Default />
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}