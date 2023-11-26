import "./About.css";
import Navbars from "../Navbars/Navbars";
import Logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbars />
      <h1 className="title-about text-center mt-5 fw-bold">About</h1>
      <div className="row m-0 my-5">
        <div className="col-12 col-md-6 text-center">
          <img src={Logo} alt="" className="img-fluid" width={400} />
        </div>
        <div className="col-12 col-md-6 mt-5">
          <p className="text-wrap fw-medium">
            Dari kata francis &quot;<strong>suffler</strong>&quot; yang berarti
            &quot;<strong>Meniup</strong>&quot;, &quot;<strong>Bernafas</strong>
            &quot;, atau &quot;
            <strong>Menghembuskan</strong>&quot;, Souffle telah menjadi tren
            global dan masih mendapatkan popularitas khususnya Souffle Pancake
            Jepang. Hidangan berbahan dasar telur ini terkenal dengan teksturnya
            yang menggelembung, yang dikaitkan dengan putih telur yang di kocok
            hingga soft peak.
          </p>

          <p className="text-wrap fw-medium">
            Menulusuri akarnya di Hawai pada tahun 1974 ketika Jan dan Jerry
            Fukunaga mendirikan restoran <em>Eggs N&apos;Things</em> mereka
            (yang diperluas ke Tokyo pada tahun 2010 dan memulai kecenderungan
            Jepang untuk pancake gaya amerika).
          </p>

          <p className="text-wrap fw-medium">
            Souffle Pancake membutuhkan waktu beberapa saat sebelum menjadi
            salah satu yang paling populer, hingga menjadi dessert paling dicari
            di dunia hingga saat ini.
          </p>

          <p className="text-wrap fw-medium">
            Kami telah melihat <em>Flippers</em>, kafe Souffle Pancake Jepang,
            mengambil alih New York City. <em>Fuwa Fuwa Cafe</em> (yang namanya
            diambil dari bahasa Jepang yang artinya lembut) juga mencapai
            London, Toronto, dan kota-kota di AS.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
