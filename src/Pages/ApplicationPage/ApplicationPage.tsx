import Footer from "../../Components/Footer/Footer";
import LogoImg from "../../Components/Logoimg/LogoImg";
import ApplicationForm from "../../Components/ApplicationForm/ApplicationFrom";
import "./ApplicationPage.scss";
import Contacts from "../../Components/Contacts/Contacts";
import FormComplited from "../../Components/FormComplited/FormComlited";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { RootState } from "../../redux";
import { FC } from "react";

const ApplicationPage: FC = () => {
  let classes = "contacts";
  const complited = useSelector(
    (state: RootState): boolean => state.FormSlice.complited
  );

  if (complited) {
    classes = "contacts contacts__complited";
  }
  return (
    <div className="applicationPage">
      <div className="container">
        <div className="applicationPage__header">
          <LogoImg nameClass="applicationPage__logo" />
        </div>
        <div className="applicationPage__content">
          <Route
            path={"/application/form"}
            exact
            render={() => <ApplicationForm />}
          />
          <Route
            path={"/application/form/formComplited"}
            render={() => <FormComplited />}
          />

          <Contacts nameClass={classes} />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ApplicationPage;
