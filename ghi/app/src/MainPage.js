import ImageSlider from "./ImageSlider"
import Fader from "./Fader";
function MainPage() {



  const slides = [
    {url: "http://localhost:3000/car1.jpg", title:"Car1"},
    {url: "http://localhost:3000/car2.jpg", title:"Car2"},
    {url: "http://localhost:3000/car3.jpg", title:"Car3"}
  ]

  const containerStyles = {
    width: '100%',
    height: '500px',
  };



  return (
    <>
    <div>
      {/* <Fader>Let us take you further...</Fader> */}
      {/* <p>Let us take you further</p> */}
    </div>
       <div style={containerStyles} >
        <ImageSlider slides={slides}/>
        </div>
    </>





  );
}

export default MainPage;
