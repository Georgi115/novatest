import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Promo from "../../Components/Promo/Promo";
import Cast from "../../Components/Cust/Cast";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <Promo />
      <Cast />
    </div>
  );
};

export default HomePage;
