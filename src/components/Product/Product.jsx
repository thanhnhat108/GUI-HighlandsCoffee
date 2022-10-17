import './product.css'
const Product = () => {
    return (
        <>
            <div className="banner " style={{
                backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-PSD-bg.jpg)'
            }}>
                <div className="banner__caption">
                    <a href='/' className="banner__caption__heading" style={{ color: "#FAEBD7" }}>CÀ PHÊ</a>
                    <p className="banner__caption__content">Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</p>
                    <a className='btn-more' href="/">KHÁM PHÁ THÊM</a>
                </div>
                <div className='banner__img' style={{ justifyContent: "flex-end" }}>
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png" alt="banner" />
                </div>
            </div>
            <div className="banner" style={{
                backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-FREEZE.jpg)'
            }}>
                <div className='banner__img' style={{ justifyContent: "flex-start" }}>
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png" alt="banner" />
                </div>
                <div className="banner__caption" style={{float:"right",textAlign:"right"}}>
                    <a href='/' className="banner__caption__heading" style={{ color: "#006400"}} >FREEZE</a>
                    <p className="banner__caption__content" style={{ color: "#006400",paddingLeft:"12px" }}>Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.</p>
                    <a className='btn-more-2' href="/">KHÁM PHÁ THÊM</a>
                </div>
            </div>
            <div className="banner" style={{
                backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-TEA-bg.jpg)'
            }}>
                <div className="banner__caption">
                    <a href='/' className="banner__caption__heading" style={{ color: "#fff" }}>TRÀ</a>
                    <p className="banner__caption__content" style={{ color: "#fff" }}>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.</p>
                    <a className='btn-more' href="/">KHÁM PHÁ THÊM</a>
                </div>
                <div className='banner__img' style={{ justifyContent: "flex-end" }}>
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png" alt="banner" />
                </div>
            </div>
        </>
    )
}

export default Product