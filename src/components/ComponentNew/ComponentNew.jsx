import { AiTwotoneCalendar } from "react-icons/ai"
import "./componentNew.css"

const ComponentNew = ({ urlImg, heading, date }) => {
    return (
        <div className="new-item">
            <div className="new-item__img">
                <img src={urlImg} alt="banner-new" />
            </div>
            <p className="new-content">{heading}</p>
            <div className="new-dates">
                <AiTwotoneCalendar className="new-dates__icon" />
                <p>{date}</p>
            </div>
        </div>
    )
}

export default ComponentNew