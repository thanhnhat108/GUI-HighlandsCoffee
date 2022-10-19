import ComponentNew from "../ComponentNew/ComponentNew"
import "./news.css"



const News = () => {
    return (
        <div className="news">
            <div className="grid">
                <h1 className="news__heading">TIN TỨC</h1>
                <div className="news__main">
                    <div className="grid_row">
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2022/thumbs/470_crop_HLC_banner-470x314.jpg"
                                heading="HIGHLANDS COFFEE THÔNG BÁO NGƯNG CUNG CẤP CHỨC NĂNG TÀI KHOẢN TRẢ TRƯỚC (PRE-PAID ACCOUNT)"
                                date="17/10/2022, 13:53"
                            />
                        </div>
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2022/thumbs/470_crop_HLC_banner-470x314.jpg"
                                heading="HIGHLANDS COFFEE THÔNG BÁO NGƯNG CUNG CẤP CHỨC NĂNG TÀI KHOẢN TRẢ TRƯỚC (PRE-PAID ACCOUNT)"
                                date="17/10/2022, 13:53"
                            />
                        </div>
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2022/thumbs/470_crop_HLC_banner-470x314.jpg"
                                heading="HIGHLANDS COFFEE THÔNG BÁO NGƯNG CUNG CẤP CHỨC NĂNG TÀI KHOẢN TRẢ TRƯỚC (PRE-PAID ACCOUNT)"
                                date="17/10/2022, 13:53"
                            />
                        </div>
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2022/thumbs/470_crop_HLC_banner-470x314.jpg"
                                heading="HIGHLANDS COFFEE THÔNG BÁO NGƯNG CUNG CẤP CHỨC NĂNG TÀI KHOẢN TRẢ TRƯỚC (PRE-PAID ACCOUNT)"
                                date="17/10/2022, 13:53"
                            />
                        </div>
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2022/thumbs/470_crop_HLC_banner-470x314.jpg"
                                heading="HIGHLANDS COFFEE THÔNG BÁO NGƯNG CUNG CẤP CHỨC NĂNG TÀI KHOẢN TRẢ TRƯỚC (PRE-PAID ACCOUNT)"
                                date="17/10/2022, 13:53"
                            />
                        </div>
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2022/thumbs/470_crop_HLC_banner-470x314.jpg"
                                heading="HIGHLANDS COFFEE THÔNG BÁO NGƯNG CUNG CẤP CHỨC NĂNG TÀI KHOẢN TRẢ TRƯỚC (PRE-PAID ACCOUNT)"
                                date="17/10/2022, 13:53"
                            />
                        </div>
                    </div>
                    <div className="wrap-btn-more-news">
                        <a href="/" className="btn-more-news">XEM THÊM</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default News