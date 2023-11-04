import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <FontAwesomeIcon icon={faPhone} className="fa fa-phone" />
            <label>+62896 6548 1626</label>
            <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" />
            <label>rumahpedia@gmail.com</label>
          </div>
          <div className="right row Rtext">
            <label>Pertanyaan</label>
            <label>Butuh Bantuan</label>
          </div>
        </div>
      </section>
    </>
  );
};
