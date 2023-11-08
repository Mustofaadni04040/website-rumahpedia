import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faIdCard,
  faShield,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "./Wrapper.css";

export default function Wrapper() {
  const data = [
    {
      cover: <FontAwesomeIcon icon={faTruckFast} />,
      title: "Pengiriman Seluruh Dunia",
      decs: "Kami dapat mengirimkan produk kami ke penjuru dunia",
    },
    {
      cover: <FontAwesomeIcon icon={faIdCard} />,
      title: "Metode Pembayaran yang Aman",
      decs: "Kami menawarkan pembayaran yang aman, nyaman dan terpercaya.",
    },
    {
      cover: <FontAwesomeIcon icon={faShield} />,
      title: "Pembelian Aman dan Terpercaya",
      decs: "Percayakan keamanan dan kepercayaan Anda dengan produk kami.",
    },
    {
      cover: <FontAwesomeIcon icon={faHeadset} />,
      title: "24/7 Support",
      decs: "Kami siap membantu Anda selama 24 jam.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="product">
                  <div className="img icon-circle-wrapper">
                    <i>{item.cover}</i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.decs}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
