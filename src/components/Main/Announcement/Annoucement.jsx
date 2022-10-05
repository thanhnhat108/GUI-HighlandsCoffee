import Img from "./Img"

const Annoucement = () => {
    return (
        <>
            <Img
                url='https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7548-PHIN-SUA-DA-2019-TALENT-WEB_1.jpg'
                colorText='#f3bd7a'
                text='KHÁM PHÁ THÊM'
                bottom='65px'
                left='915px'
                hover='hover-f3bd7a'
                isLink
            />
            <Img
                url='https://www.highlandscoffee.com.vn/vnt_upload/weblink/web_1.png'
                text='KHÁM PHÁ THÊM'
                bottom='65px'
                left='270px'
                hover='hover-f1bc7a'
                isLink
            />
            <Img
                url='https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7553-FESTIVE-2022-PRODUCT-KV-DIGITAL-WEB-1440X460.jpg'
            />
            <div className="annouce grid_row">
                <div className="annouce__shop col2"></div>
                <div className="annouce__news col2">
                    <div className="annouce__news__heading">
                        <h3 className="annouce__news__heading-text">TIN MỚI NHẤT</h3>
                        <a className="annouce__news__link" href="/">Xem toàn bộ <i></i></a>
                    </div>
                    <div className="annouce__news__content">
                        <ul className="annouce__news__list">
                            <li className="annouce__news__item">
                                <div className="wrap-img">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/news/07_2022/HCO-7672-SUMMER-TEA-2022-DIGITAL-NEWS-470X314.jpg" alt="HÈ VUI PHƠI PHỚI CÙNG BỘ 3 TRÀ NHIỆT ĐỚI" />
                                </div>
                                <div className="annouce__news_item__main">
                                    <a href="/" className="annouce__news__item__heading">HÈ VUI PHƠI PHỚI CÙNG BỘ 3 TRÀ NHIỆT ĐỚI</a>

                                    <div className="date">
                                        <i></i>
                                        <span>01/07/2022</span>

                                    </div>
                                </div>
                            </li>
                            <li className="annouce__news__item">
                                <div className="wrap-img">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2022/HCO-7666-CAFFEINE-FIX-DIGITAL-NEWS-470X314.jpg" alt="LÀM GÌ THÌ LÀM, CÀ PHÊ CÁI ĐÃ CÙNG HIGHLANDS COFFEE!" />
                                </div>
                                <div className="annouce__news_item__main">
                                    <a href="/" className="annouce__news__item__heading">LÀM GÌ THÌ LÀM, CÀ PHÊ CÁI ĐÃ CÙNG HIGHLANDS COFFEE!</a>

                                    <div className="date">
                                        <i></i>
                                        <span>11/03/2022</span>

                                    </div>
                                </div>
                            </li>
                            <li className="annouce__news__item">
                                <div className="wrap-img">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/news/01_2022/MicrosoftTeams-image.png" alt="LỊCH HOẠT ĐỘNG TẾT NGUYÊN ĐÁN 2022 CỦA HIGHLANDS COFFEE TRÊN TOÀN QUỐC" />
                                </div>
                                <div className="annouce__news_item__main">
                                    <a href="/" className="annouce__news__item__heading">LỊCH HOẠT ĐỘNG TẾT NGUYÊN ĐÁN 2022 CỦA HIGHLANDS COFFEE TRÊN TOÀN QUỐC</a>

                                    <div className="date">
                                        <i></i>
                                        <span>26/01/2022</span>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="annouce__news__input">
                        <input type="text" className="Nhập email của bạn để nhận thông tin" />
                        <a href="/"><i></i> Gửi</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Annoucement