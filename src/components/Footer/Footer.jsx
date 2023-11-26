import "./Footer.css";
import LocationIcon from "../../assets/Icons/placeholder.png";
import InstagramIcon from "../../assets/Icons/instagram.png";

const Footer = () => {
  return (
    <footer className="footer pt-3 pb-1">
      <div className="row m-0">
        <div className="col-12 col-md-6">
          <p className="text-dark fw-bold bg-primarys mb-0 text-center">
            Alamat
          </p>
          <div className="d-flex bg-warnings justify-content-center">
            <p className="m-0">
              <img src={LocationIcon} alt="" width={18} />
            </p>
            <p className="text-dark mt-1 fw-medium">
              Jl. Kalisari Raya No. 10 (Depan kvape store kalisari)
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p className="textdark fw-bold mb-0 bg-dangers text-center">
            Sosial Media
          </p>

          <div className="d-flex bg-successs justify-content-center">
            <p className="m-0">
              <img src={InstagramIcon} alt="" width={25} />
            </p>
            <a
              href="https://www.instagram.com/pancake_goyang/"
              className="ms-1 fw-medium"
              id="footer-instagram-text"
            >
              @pancake_goyang
            </a>
          </div>
        </div>
        <hr />
        <div className="col-12">
          <p className="text-dark text-center fw-bold">
            Copyright © 2023. Pancake Goyang. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
