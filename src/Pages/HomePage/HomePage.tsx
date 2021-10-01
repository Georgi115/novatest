import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Promo from "../../Components/Promo/Promo";
import Cast from "../../Components/Cust/Cast";
import Footage from "../../Components/Footage/Footage";
import Merch from "../../Components/Merch/Merch";
import Footer from "../../Components/Footer/Footer";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="HomePage">
      <Header />
      <Promo />
      <Cast />
      <Footage />
      <Merch />
      <Footer />
    </div>
  );
};

export default HomePage;
