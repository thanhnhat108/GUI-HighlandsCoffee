import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaRegPaperPlane } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import Img from "./Img"

const Annoucement = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    }
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
                <div className="annouce__shop col2">
                    <h3 className="annouce__shop__heading">QUÁN MỚI</h3>
                    <Slider {...settings}>
                    
                    <div className="annouce__shop__main">
                        <a className=" annouce__shop__link annouce__shop__main__heading" href="/">HÀM CÁ MẬP</a>
                        <a href="/" className="annouce__shop__link annouce__shop__addr">Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội</a>
                        <a href="/" className=" annouce__shop__location">TÌM ĐƯỜNG <IoIosArrowForward className="annouce__shop__location__icon" /></a>
                    </div>
                    <div className="annouce__shop__main">
                        <a className="annouce__shop__link annouce__shop__main__heading" href="/">721 Huỳnh Tấn Phát</a>
                        <a href="/" className="annouce__shop__link annouce__shop__addr">721 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh</a>
                        <a href="/" className="annouce__shop__link annouce__shop__location">TÌM ĐƯỜNG <IoIosArrowForward className="annouce__shop__location__icon" /></a>
                    </div>
                    </Slider>
                </div>

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
                    <div className="annouce__news__form">
                        <input className="annouce__news__input" type="text" placeholder="Nhập email của bạn để nhận thông tin..." />
                        <button className="annouce__news__btn-submit"><FaRegPaperPlane className="annouce__news__form__icon" /> GỬI</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Annoucement