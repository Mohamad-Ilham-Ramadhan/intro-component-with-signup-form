import React, { useRef, useEffect } from "react";

export default function Form() {
  const refForm = useRef(null);
  useEffect(() => {
    const form = refForm.current;
    form.addEventListener("submit", (e) => {
      if (form.checkValidity() === false) {
        e.stopPropagation();
        e.preventDefault();
        form.classList.add("was-validated");
      }
    });
  }, []);
  return (
    <form
      ref={refForm}
      noValidate
      className="form needs-validation card mb-6 mb-lg-7 mb-xl-10 shadow"
    >
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="First Name"
            required
          />
          <div className="invalid-feedback">First name cannot be empty</div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            required
          />
          <div className="invalid-feedback">Last name cannot be empty</div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required
          />
          <div className="invalid-feedback">
            Looks like this is not an email
          </div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
          />
          <div className="invalid-feedback">Password cannot be empty</div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block btn-submit btn-success text-uppercase text-white"
          >
            claim your free trial
          </button>
        </div>
        <div className="form-footer text-center">
          <small className="form-text">
            By clicking the button, you are agreeing to our
            <a href="#" className="terms">
              Terms and Services
            </a>
          </small>
        </div>
      </div>
    </form>
  );
}
