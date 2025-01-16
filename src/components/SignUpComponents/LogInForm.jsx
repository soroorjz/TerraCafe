import "./SignUpForm.scss";
const LogInForm = () => {
  return (
    <div className="signUpFormContainer">
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">نام کاربری</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="نام کاربری خود را وارد کنید"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>


        <button type="submit" className="submit-button">
          ورود
        </button>
      </form>
    </div>
  );
};

export default LogInForm;

// یک مودال برای نشان دادن انجام ثبت نام باید داشته باشیم
