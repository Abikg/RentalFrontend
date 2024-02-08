import "../css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homepageimg from "../assets/homeimage.jpg";
import HouseCarousel from "./HouseCarousel";

function Home() {
  return (
    <>
      <div>
        <div className="home1">
          <img src={homepageimg} alt="" />
          <p>
            Helping you live <br />
            to the fullest
          </p>
        </div>
        <div className="home2">
          <p>Explore our properties</p>
          <div>
            <select>
              <option value="" disabled selected>
                Select an option
              </option>
            </select>
            <select>
              <option value="" disabled selected>
                Select an option
              </option>
            </select>
            <select>
              <option value="" disabled selected>
                Select an option
              </option>
            </select>
            <button>Search</button>
          </div>
        </div>
        <div className="home3">
          <HouseCarousel></HouseCarousel>
        </div>
      </div>
    </>
  );
}

export default Home;
