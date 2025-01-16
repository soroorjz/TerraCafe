import React, { useState } from "react";
import "./SignUpForm.scss";
const SignupForm = () => {
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
          <label htmlFor="name">نام</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="نام خود را وارد کنید"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ایمیل خود را وارد کنید"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">شماره تلفن (اختیاری)</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="شماره تلفن خود را وارد کنید"
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <button type="submit" className="submit-button">
          ثبت نام
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