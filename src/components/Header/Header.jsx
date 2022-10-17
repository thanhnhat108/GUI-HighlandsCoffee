import "./header.css"
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState } from "react"
const Header = () => {
    const [idNav, setidNav] = useState(0)

    return (
        <div className="wrapper">
            <header className="header">
                <Link onClick={() => setidNav(0)} to='/' className="header__logo">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/1200px-Highlands_Coffee_logo.svg.png" alt="logo" />
                </Link>
                <div className="header-tools">
                    <div className="input-language" >
                        <div className="header__input">
                            <input type="text" placeholder="Từ khóa" />
                            <div className="icon-seacrh"><BsSearch /></div>
                        </div>
                        <div className="language language-vn" />
                        <div className="language language-eng" />

                    </div>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li style={{backgroundColor: idNav === 1 ? "#53382C" : "" }} onClick={() => setidNav(1)} className="nav__item">QUÁN CÀ PHÊ</li>
                            <li style={{backgroundColor: idNav === 2 ? "#53382C" : "" }} onClick={() => setidNav(2)} className="nav__item nav__item-show-content">
                                <Link className="nav__item__link" to='/product'>THỰC ĐƠN</Link>
                                <div className="nav__content">
                                    <div className="grid" style={{ paddingBottom: '30px' }}>
                                        <div className="grid__row" style={{ textAlign: 'center' }}>
                                            <div className="grid__column" >
                                                <h3 className="subnav__heading">CÀ PHÊ</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Cà Phê Phin</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">PhinDi</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Cà Phê Espresso</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column">
                                                <h3 className="subnav__heading">FREEZE</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Freeze Cà Phê Phin</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Freeze Không Cà Phê</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column">
                                                <h3 className="subnav__heading">TRÀ</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Trà Sen Vàng Mới</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Trà Thạch Đào</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Trà Thạch Vải</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">TRÀ NHIỆT ĐỚI (MỚI!)</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column">
                                                <h3 className="subnav__heading">KHÁC</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Bánh Ngọt</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Merchandise</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Cà Phê Đóng Gói</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Thực Đơn Giao Hàng</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column">
                                                <div className="bannerMenu">
                                                    <h3 className="bannerMenu__heading">Phin Sữa Đá Đậm Đà Chất Phin! 29.000đ</h3>
                                                    <img className="bannerMenu__img" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" alt="Phin sữa đá" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav__item nav__item-show-content">TIN TỨC
                                <div className="nav__content">
                                    <div className="grid" style={{ paddingBottom: '30px' }}>
                                        <div className="grid__row" style={{ textAlign: 'center' }}>
                                            <div className="grid__column" >
                                                <h3 className="subnav__heading">TIN TỨC & SỰ KIỆN</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Cà Phê Phin</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">PhinDi</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Cà Phê Espresso</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column">
                                                <h3 className="subnav__heading">TIN KHUYẾN MẠI</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Freeze Cà Phê Phin</a></li>
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Freeze Không Cà Phê</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column"></div>
                                            <div className="grid__column"></div>
                                            <div className="grid__column">
                                                <div className="bannerMenu">
                                                    <h3 className="bannerMenu__heading">Tự hào sinh ra từ đất Việt, 1999!</h3>
                                                    <img className="bannerMenu__img" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" alt="Tự hào sinh ra từ đất Việt, 1999!" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav__item nav__item-show-content">CỘNG ĐỒNG
                                <div className="nav__content">
                                    <div className="grid" style={{ paddingBottom: '30px' }}>
                                        <div className="grid__row" style={{ textAlign: 'center' }}>
                                            <div className="grid__column" >
                                                <h3 className="subnav__heading">GIÁ TRỊ VĂN HÓA VIỆT</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Đương Đại Hóa Tranh Đông Hồ</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column">
                                                <h3 className="subnav__heading">CỘNG ĐỒNG</h3>
                                                <ul className="subnav-list">
                                                    <li className="subnav-item"><a href="/" className="subnav-item-link">Lớp Học Cho Em</a></li>
                                                </ul>
                                            </div>
                                            <div className="grid__column"></div>
                                            <div className="grid__column"></div>
                                            <div className="grid__column">
                                                <div className="bannerMenu">
                                                    <h3 className="bannerMenu__heading">Đương Đại Hóa Tranh Đông Hồ</h3>
                                                    <img className="bannerMenu__img" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" alt="Đương Đại Hóa Tranh Đông Hồ" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav__item nav__item-show-content">VỀ CHÚNG TÔI
                                <div className="nav__content">
                                    <div className="grid" style={{ paddingBottom: '30px' }}>
                                        <div className="grid__row" style={{ textAlign: 'center' }}>
                                            <div className="grid__column" >
                                                <h3 className="subnav__heading">KHỞI NGUỒN</h3>
                                            </div>
                                            <div className="grid__column">
                                                <h3 className="subnav__heading">DỊCH VỤ KHÁCH HÀNG</h3>
                                            </div>
                                            <div className="grid__column">
                                                <h3 className="subnav__heading">NGHỀ NGHIỆP</h3>
                                            </div>
                                            <div className="grid__column"></div>
                                            <div className="grid__column">
                                                <div className="bannerMenu">
                                                    <h3 className="bannerMenu__heading">Thương hiệu bắt nguồn từ cà phê Việt!</h3>
                                                    <img className="bannerMenu__img" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/ABOUT-ORIGIN.png" alt="Thương hiệu bắt nguồn từ cà phê Việt!" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>



                        </ul>
                    </nav>
                </div>


            </header>

        </div>
    )
}

export default Header