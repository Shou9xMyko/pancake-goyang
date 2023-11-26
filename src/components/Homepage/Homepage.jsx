import "./Homepage.css";
import Navbars from "../Navbars/Navbars";
import BgImage from "../../assets/home page.png";
import Documentation from "../Documentation_Image/Documentation";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Navbars />
      <img
        src={BgImage}
        alt=""
        style={{ width: "100%", height: "auto" }}
        className="img-fluid"
      />

      <Documentation />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eb7d26"
          fillOpacity="1"
          d="M0,64L24,64C48,64,96,64,144,74.7C192,85,240,107,288,106.7C336,107,384,85,432,80C480,75,528,85,576,96C624,107,672,117,720,117.3C768,117,816,107,864,122.7C912,139,960,181,1008,186.7C1056,192,1104,160,1152,170.7C1200,181,1248,235,1296,213.3C1344,192,1392,96,1416,48L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <Footer />
    </>
  );
};

export default Homepage;
