import ComponentNew from "../ComponentNew/ComponentNew"

const Community = () => {
    return (
        <div className="news">
            <div className="grid">
                <h1 className="news__heading">TRÁCH NHIỆM CỘNG ĐỒNG</h1>
                <div className="news__main">
                    <div className="grid_row">
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2019/thumbs/470_crop_Picture1.png"
                                heading='HIGHLANDS COFFEE CÙNG Ý TƯỞNG “LỒNG ĐÈN XANH” THẮP SÁNG "TRUNG THU XANH" CHO HƠN 700 EM NHỎ'
                                date="13/09/2019, 15:59"
                            />
                        </div>
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2018/thumbs/470_crop_KV_Highlands_CSR_1.jpg"
                                heading="ĐƯƠNG ĐẠI HÓA TRANH ĐÔNG HỒ!"
                                date="08/02/2018, 08:26"
                            />
                        </div>
                        <div className="grid__column-4">
                            <ComponentNew
                                urlImg="https://www.highlandscoffee.com.vn/vnt_upload/news/05_2018/thumbs/470_crop_IMG_0479.jpg"
                                heading="TRUNG THU YÊU THƯƠNG - LỚP HỌC CHO EM 2017"
                                date="09/10/2017, 21:39"
                            />
                        </div>                   

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community