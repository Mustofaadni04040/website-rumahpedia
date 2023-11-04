import Slider from "react-slick";
import Ddata from "./Ddata";

export default function Dcard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((item, index) => {
          return (
            <div key={index}>
              <div className="product">
                <div className="box">
                  <div className="img">
                    <img
                      src={item.cover}
                      alt={item.name}
                      width="100%"
                      style={{ margin: "20px 0 20px 0" }}
                    />
                  </div>
                  <h4>{item.name}</h4>
                  <div
                    className="price"
                    style={{ display: "block", marginTop: "5px" }}
                  >
                    <h6 style={{ textDecoration: "line-through" }}>
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </h6>
                    <span className="price-discount">
                      {item.discountPrice.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
