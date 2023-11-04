export default function Cate() {
  const data = [
    {
      cateImg: "../../../src/assets/images/logoBrands/logo1.png",
      cateName: "Cosmos",
    },
    {
      cateImg: "../../../src/assets/images/logoBrands/logo2.png",
      cateName: "Nippont Paint",
    },
    {
      cateImg: "../../../src/assets/images/logoBrands/logo3.png",
      cateName: "Central",
    },
    {
      cateImg: "../../../src/assets/images/logoBrands/logo4.png",
      cateName: "Inoac",
    },
    {
      cateImg: "../../../src/assets/images/logoBrands/logo5.png",
      cateName: "Miyako",
    },
    {
      cateImg: "../../../src/assets/images/logoBrands/logo6.png",
      cateName: "Philips",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
        </div>
        {data.map((item, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={item.cateImg} alt={item.cateName} />
              <span>{item.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>Lihat Semua Brand</button>
        </div>
      </div>
    </>
  );
}
