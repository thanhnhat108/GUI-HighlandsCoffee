import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./SliderCard.css"
import Sdata from "./Sdata"


const SliderCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ marginBottom: "50px" }}>{dots}</ul>
        },
    }
    return (


            <Slider className="slider" {...settings}>
                {Sdata.map(item => (
                    <div key={item.id}>
                        <img src={item.link} alt=""  />
                        {item.id===5 ? <a href="/" className="slider-link imgLink">KHÁM PHÁ THÊM</a> : ''}
                    </div>
                ))}
            </Slider>
    )
}

export default SliderCard