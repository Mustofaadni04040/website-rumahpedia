import PropTypes from "prop-types";
import "./Modal.css";
import Data from "../flashDeals/Fdata";
const { productItems } = Data;

export default function Modal({ onToggleModal }) {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Scan QR dibawah ini untuk melihat produk dengan tampilang 3D</p>
          <div className="barcode">
            <img src={productItems[0].barcode} alt="" width={250} />
          </div>
          <button className="modal-close" onClick={onToggleModal}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
Modal.propTypes = {
  onToggleModal: PropTypes.func,
};
