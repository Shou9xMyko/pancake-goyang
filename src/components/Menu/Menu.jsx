import "./Menu.css";
import Footer from "../Footer/Footer";
import Navbars from "../Navbars/Navbars";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Menu1 from "../../assets/menu1.png";
import Menu2 from "../../assets/menu2.png";
import Menu3 from "../../assets/menu3.png";
import Menu4 from "../../assets/menu4.png";
import Menu5 from "../../assets/menu5.png";

const Menu = () => {
  const dataMenu = [
    {
      id: 1,
      nama_menu: "Pancake Vanilla",
      harga_menu: 20000,
      image_menu: Menu5,
    },
    {
      id: 2,
      nama_menu: "Pancake Boba",
      harga_menu: 20000,
      image_menu: Menu1,
    },
    {
      id: 3,
      nama_menu: "Pancake Choco",
      harga_menu: 20000,
      image_menu: Menu2,
    },
    {
      id: 4,
      nama_menu: "Pancake Tiramisu",
      harga_menu: 20000,
      image_menu: Menu3,
    },
    {
      id: 5,
      nama_menu: "Pancake Green Tea",
      harga_menu: 20000,
      image_menu: Menu4,
    },
  ];

  return (
    <>
      <Navbars />
      <div className="container">
        <h1 className="text-center title-daftar-menu my-4 my-md-5">
          Daftar Menu
        </h1>
        <div className="row m-0 gap-5 justify-content-center">
          {dataMenu.map((item) => {
            return (
              <div
                className="col-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2  p-0 d-flex justify-content-center"
                key={item.id}
              >
                <div className="card shadow w-100" style={{ width: "18rem" }}>
                  {/* <img
                    src={item.image_menu}
                    className="card-img-top img-fluid"
                    alt="..."
                  /> */}
                  <LazyLoadImage
                    src={item.image_menu}
                    className="card-img-top img-fluid"
                    effect="blur"
                  />
                  <div className="card-body">
                    <h4 className="card-title-pancake fw-bold">
                      {item.nama_menu}
                    </h4>
                    <hr className="m-0 mb-3" />
                    <div className="d-flex justify-content-between">
                      <p className="card-text fs-5 fw-medium">Harga</p>
                      <p className="card-text-price fs-5 fw-bold">20k</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="mt-5" />
      <div className="text-center my-5 mx-3">
        <p className="fw-medium fs-4 mb-4">
          Untuk memesan pancake hubungi saya via WhatsApp dengan klik tombol
          dibawah
        </p>
        <ReactWhatsapp
          id="btn-whatsapp"
          number="+62 882-9109-2270"
          message="Halo, saya ingin memesan pancake"
        >
          <FaWhatsapp className="fs-4 me-1" style={{ color: "white" }} />
          Kirim Pesan
        </ReactWhatsapp>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
