import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Promo from "../../Components/Promo/Promo";
import Cast from "../../Components/Cust/Cast";
import Footage from "../../Components/Footage/Footage";
import Merch from "../../Components/Merch/Merch";
import Footer from "../../Components/Footer/Footer";
import React, { FC } from "react";
import ApplicationPage from "../ApplicationPage/ApplicationPage";

const HomePage: FC = () => {
  return (
    <React.Fragment>
      <div className="HomePage">
        <Header />
        <Promo />
        <Cast />
        <Footage />
        <Merch />
        <Footer />
      </div>
      <ApplicationPage />
    </React.Fragment>
  );
};

export default HomePage;
