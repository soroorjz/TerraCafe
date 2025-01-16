import React, { useState } from "react";
import "./SignUpForm.scss";
import GetText from "../../functions/getTexts";
import { useTranslation } from "react-i18next";
const SignupForm = () => {
  const { content } = GetText("signUp");
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = { email: "", phone: "" };

    if (!formData.email.includes("@")) {
      newErrors.email = "ایمیل باید شامل @ باشد";
    }

    if (formData.phone && formData.phone.length < 12) {
      newErrors.phone = "شماره تلفن باید حداقل ۱۲ رقم باشد";
    }

    setErrors(newErrors);

    return !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  

  return (
    <div className="signUpFormContainer">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{content.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={content.namePH}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{content.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={content.emailPH}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone"> {content.phonNum}</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={content.phonNumPH}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <button type="submit" className="submit-button">
        {content.signUpBtn}
        </button>
      </form>

      {/* {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>ثبت نام شما با موفقیت انجام شد!</p>
            <button className="close-modal" onClick={closeModal}>
              بستن
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SignupForm;


// یک مودال برای نشان دادن انجام ثبت نام باید داشته باشیم