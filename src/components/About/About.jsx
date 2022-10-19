import "./about.css"

const About = () => {
    return (
        <>
            <div className="banner-about " style={{
                backgroundColor: "#fff"
            }}>

                <div className="banner__caption col-half" style={{ paddingLeft: "200px" }}>
                    <a href='/' className="banner__caption__heading banner__caption__heading-about" style={{ color: "#53382c" }}>KHỞI NGUỒN</a>
                    <p className="banner__desc">Thương hiệu bắt nguồn từ cà phê Việt Nam</p>
                    <p className="banner__caption__content banner__caption__content-about" style={{ color: "#333"}}>
                        Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.
                    </p>
                    <a className='btn-more-about hover-B22830' href="/">XEM CHI TIẾT</a>
                </div>
                <div className='banner__img-about1 col-half' style={{ backgroundImage: "url(https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png)" }}>
                </div>
            </div>

            <div className="banner-about " style={{
                backgroundColor: "#BD945D"
            }}>
                <div className='banner__img-about2 col-half' style={{ backgroundImage: "url(https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg" }}>
                </div>
                <div className="banner__caption col-half" style={{ paddingRight: "150px", textAlign: "right" }}>
                    <a href='/' className="banner__caption__heading banner__caption__heading-about" style={{ color: "#fff" }}>DỊCH VỤ KHÁCH HÀNG</a>
                    <p className="banner__desc" style={{ color: "#fff" }}>Chào mừng bạn đến với Highlands Coffee®</p>
                    <p className="banner__caption__content banner__caption__content-about" style={{ color: "#fff"}}>
                        Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy chia sẻ với chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.
                    </p>
                    <a className='btn-more-about hover-fff' href="/">XEM CHI TIẾT</a>
                </div>
            </div>

            <div className="banner-about " style={{
                backgroundColor: "#8E5A2D"
            }}>

                <div className="banner__caption col-half" style={{ paddingLeft: "200px" }}>
                    <a href='/' className="banner__caption__heading banner__caption__heading-about" style={{ color: "#fff" }}>NGHỀ NGHIỆP</a>
                    <p className="banner__desc" style={{ color: "#fff" }}>Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®</p>
                    <p className="banner__caption__content banner__caption__content-about" style={{ color: "#fff"}}>
                        Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của gia đình Highlands Coffee®.
                    </p>
                    <a className='btn-more-about hover-fff' href="/">XEM CHI TIẾT</a>
                </div>
                <div className='banner__img-about3 col-half' style={{ backgroundImage: "url(https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg)" }}>
                </div>
            </div>
        </>

    )
}

export default About