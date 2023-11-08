import Tdata from "./Tdata";
import Slider from "react-slick";

export default function TopCart() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (window.innerWidth <= 576) {
    settings.slidesToShow = 2;
  } else {
    settings.slidesToShow = 3;
  }
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((item, index) => {
          return (
            // div nya untuk memisahkan antar card ketika menggunakan react-slick-slider
            <div key={index}>
              <div className="box product">
                <div className="nametop d_flex">
                  <span className="tleft">{item.name}</span>
                  <span className="tright">{item.desc}</span>
                </div>
                <div className="img">
                  <img src={item.cover} alt={item.name} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
