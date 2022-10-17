import './style.css'
const Img = ({ url, text, bottom, left, hover, isLink }) => {
    return (
        <div
            className="contentImg lazy-start"
            style={{
                backgroundImage: `url('${url}')`
            }}
        >
            {isLink ?
                <a
                    href="/"
                    className={hover}
                    style={{
                        bottom: bottom,
                        left: left
                    }}
                >{text}</a>
                : ''
            }
        </div>
    )
}

export default Img