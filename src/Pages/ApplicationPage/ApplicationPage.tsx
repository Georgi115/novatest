import Footer from "../../Components/Footer/Footer";
import LogoImg from "../../Components/Logoimg/LogoImg";
import ApplicationForm from "../../Components/ApplicationForm/ApplicationFrom";
import "./ApplicationPage.scss";
import Contacts from "../../Components/Contacts/Contacts";

const ApplicationPage = () => {
  return (
    <div className="applicationPage">
      <div className="container">
        <div className="applicationPage__header">
          <LogoImg nameClass="applicationPage__logo" />
        </div>
        <div className="applicationPage__content">
          <ApplicationForm />
          <Contacts />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ApplicationPage;
