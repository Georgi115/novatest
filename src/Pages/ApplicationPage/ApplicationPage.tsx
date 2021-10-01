import Footer from "../../Components/Footer/Footer";
import LogoImg from "../../Components/Logoimg/LogoImg";
import "./ApplicationPage.scss";

const ApplicationPage = () => {
  return (
    <div className="applicationPage">
      <div className="container">
        <div className="applicationPage__header">
          <LogoImg nameClass="applicationPage__logo" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ApplicationPage;
