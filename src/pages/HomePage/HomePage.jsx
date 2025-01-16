import Banner from "../../components/Banner/Banner";
import CoffeeSlider from "../../components/CoffeeSlider/CoffeeSlider";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
function HomePage() {
  return (
    <div className="homePage-Container">
      <NavBar />
      <Banner />
      <CoffeeSlider />
      <Footer />
    </div>
  );
}
export default HomePage;
