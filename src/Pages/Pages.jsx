import { Route, Routes } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Product from "../components/Product/Product"

const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product" element={<Product />} />

            </Routes>

            <Footer />
        </>
    )
}

export default Pages