import "./Banner.css";

export default function Banner() {
  return (
    <>
      <section className="banner background">
        <div className="container">
          <div className="img-1">
            <img
              src="../../../src/assets/images/banner/banner1.jpg"
              alt="banner-1"
            />
            <span>DISKON 30%</span>
            <span>Beli Sekarang</span>
          </div>
          <div className="img-2">
            <img
              src="../../../src/assets/images/banner/banner2.jpg"
              alt="banner-2"
              width="100%"
              height="100%"
            />
            <span>DISKON 50%</span>
            <span>Beli Sekarang</span>
          </div>
        </div>
      </section>
    </>
  );
}
