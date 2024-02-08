import Slider from "react-slick";
import { homeData } from "../services/home-service";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
interface HomeProps {
  description: string;
  // Add more fields if needed
}

const Arrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};
const ArrowPrev = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

function HouseCarousel() {
  const [homesData, setHomeData] = useState<HomeProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from backend
        const data = await homeData(); // Wait for the promise to resolve
        // Update state with the fetched data
        setHomeData(data);
      } catch (error) {
        console.error("Error fetching home data:", error);
        // Handle error if needed
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  console.log(homesData);
  // console.log(setHomeData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <ArrowPrev />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {homesData.map((home) => (
          <div>
            <p>{home.description}</p>
          </div>
        ))}
        <div className="card">
          <img src="" alt="photo" />
          <div className="cardbody">
            <h3>1</h3>
          </div>
        </div>
        <div className="card">
          <img src="" alt="photo" />
          <div className="cardbody">
            <h3>12</h3>
          </div>
        </div>
        <div className="card">
          <img src="" alt="photo" />
          <div className="cardbody">
            <h3>123</h3>
          </div>
        </div>
        <div className="card">
          <img src="" alt="photo" />
          <div className="cardbody">
            <h3>1234</h3>
          </div>
        </div>
        <div className="card">
          <img src="" alt="photo" />
          <div className="cardbody">
            <h3>12345</h3>
          </div>
        </div>
        <div className="card">
          <img src="" alt="photo" />
          <div className="cardbody">
            <h3>123456</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HouseCarousel;
