import { useTranslation } from "react-i18next";
import GetText from "../../functions/getTexts";
import "./SignUpForm.scss";
const LogInForm = () => {
  const { content } = GetText("signIn");
  const { i18n } = useTranslation();
  return (
    <div className="signUpFormContainer">
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">{content.userName} </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={content.userNamePH}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">{content.passWord}</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={content.passWordPH}
          />
        </div>

        <button type="submit" className="submit-button">
          {content.signInBtn}
        </button>
      </form>
    </div>
  );
};

export default LogInForm;

// یک مودال برای نشان دادن انجام ثبت نام باید داشته باشیم
