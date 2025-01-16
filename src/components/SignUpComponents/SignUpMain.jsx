import React from "react";
import "./SignUpMain.scss";
import NavBar from "../NavBar/NavBar";
import SignupForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import { useParams } from "react-router-dom";
// import GetText from "../../functions/getTexts";
import { useTranslation } from "react-i18next";
const SignUpMain = () => {
  // const { content } = GetText("signUp");
  const { i18n } = useTranslation();
  const { formType } = useParams();
  return (
    <>
      <NavBar />
      <div className="signUpContainer">
        <div className={`signUpWrapper ${i18n.language === "fa" ? "faWrapper" :""}`}
        >
          <div className="coverPart">
            <img
              className="bgVector"
              src="/assets/images/rb_10805.png"
              alt=""
            />
          </div>
          <div className="formPart">
          {formType === "signUp" && <SignupForm />} {/* فرم ثبت نام */}
          {formType === "logIn" && <LogInForm />}   {/* فرم ورود */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpMain;
