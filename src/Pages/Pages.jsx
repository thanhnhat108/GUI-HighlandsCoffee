import { Route, Routes } from "react-router-dom"
import About from "../components/About/About"
import Community from "../components/Community/Community"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import News from "../components/News/News"
import Product from "../components/Product/Product"

const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product" element={<Product />} />
                <Route path="/news" element={<News />} />
                <Route path="/community" element={<Community />} />
                <Route path="/about-us" element={<About />} />

            </Routes>

            <Footer />
        </>
    )
}

export default Pages