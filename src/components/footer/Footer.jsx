import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>
              RUMAH<span className="mark">PEDIA.</span>
            </h1>
            <p>
              Kami adalah perusahaan yang menjual produk rumah tangga yang
              berkualitas diantara perusahaan-perusahaan yang lain
            </p>
          </div>
          <div className="box">
            <h2>Tentang Kami</h2>
            <ul>
              <li>
                <a href="#">Karir</a>
              </li>
              <li>
                <a href="#">Toko Kami</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>
                <a href="#">Pusat Bantuan</a>
              </li>
              <li>
                <a href="#">Cara Order</a>
              </li>
              <li>
                <a href="#">PLaca Orderan</a>
              </li>
              <li>
                <a href="#">Pengajuan Pengembalian</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Hubungi Kami</h2>
            <ul>
              <li>
                <a href="#">
                  Pamulang, Kota Tangerang Selatan, Banten Indonesia
                </a>
              </li>
              <li>
                <a href="#">rumahpedia@gmail.com</a>
              </li>
              <li>
                <a href="#">+62 896 6548 1626</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
