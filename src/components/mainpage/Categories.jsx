export default function Categories() {
  const data = [
    {
      cateImg: "../../../src/assets/icons/category/icon-chair.png",
      cateName: "Kursi Tamu",
    },
    {
      cateImg: "../../../src/assets/icons/category/icon-ac.png",
      cateName: "Air Conditioner",
    },
    {
      cateImg: "../../../src/assets/icons/category/icon-sofa.png",
      cateName: "Sofa Nyaman Untuk Keluarga",
    },
    {
      cateImg: "../../../src/assets/icons/category/icon-bed.png",
      cateName: "Tempat Tidur",
    },
    {
      cateImg: "../../../src/assets/icons/category/icon-lamp.png",
      cateName: "Lampu Ruang Tamu",
    },
    {
      cateImg: "../../../src/assets/icons/category/icon-tvtable.png",
      cateName: "Meja TV",
    },
    {
      cateImg: "../../../src/assets/icons/category/icon-plant.png",
      cateName: "Tanaman Hias",
    },
    {
      cateImg: "../../../src/assets/icons/category/icon-cupboard.png",
      cateName: "Lemari Kamar",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="categories image" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
