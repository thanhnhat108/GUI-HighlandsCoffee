import Slider from "react-slick"
import "./SliderCard.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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

        <div className="slider">

            <Slider {...settings}>
                {Sdata.map(item => (

                    <div key={item.id}>
                        <img src={item.link} alt=""  />
                        {item.id===5 ? <a href="/" className="slider-link imgLink">KHÁM PHÁ THÊM</a> : ''}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderCard