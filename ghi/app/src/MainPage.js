import ImageSlider from "./ImageSlider";
import Fader from "./Fader";
import './MainPage.css';

function MainPage() {
  const slides = [
    { url: "http://localhost:3000/car1.jpg", title: "Car1" },
    { url: "http://localhost:3000/car2.jpg", title: "Car2" },
    { url: "http://localhost:3000/car3.jpg", title: "Car3" },
  ];

  const containerStyles = {
    width: "100%",
    height: "500px",
  };

  return (
    <>
      <div className="greeting">Let Us Help You...</div>
      <div className="greeting2"> Find Your Way</div>
      <div className="logo d-flex justify-content-center">Your Path</div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </>
  );
}

export default MainPage;
