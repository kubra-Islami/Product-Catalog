import Layout from "./layout/Layout.jsx";
import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<Products/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
