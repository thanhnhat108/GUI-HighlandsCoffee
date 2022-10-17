import './footer.css'
import { GrInstagram } from "react-icons/gr"
import { FiYoutube } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { FaRegPaperPlane } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__socials">
                <ul className='footer__socials__list'>
                    <li className='footer__socials__item'>
                        <a href="/" className="footer__socials__link">
                            <FaFacebookF className='footer__socials__icon'  />
                        </a>
                    </li>
                    <li className='footer__socials__item'>
                        <a href="/" className="footer__socials__link">
                            <FiYoutube className='footer__socials__icon' />
                        </a>
                    </li>
                    <li className='footer__socials__item'>
                        <a href="/" className="footer__socials__link">
                            <GrInstagram className='footer__socials__icon' />
                        </a>
                    </li>
                </ul>
            </div>
            <p className='footer__copyright'>© 2018 Highlands Coffee. All rights reserved</p>
            <a className='footer__link' href='/'>
                <FaRegPaperPlane />
                <p className='text-footer'>Đăng kí để nhận bản tin</p>
            </a>
            <a className='footer__link' href='/'>
                <AiOutlineMail />
                <p className='text-footer'>customerservice@highlandscoffee.com.vn</p>

            </a>
        </footer>
    )
}

export default Footer