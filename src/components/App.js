import React from "react";

import Form from "./Form";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <header className="header text-center text-lg-left">
            <h1 className="header-title mb-4 font-weight-bold">
              Learn to code by watching others
            </h1>
            <p className="header-p">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorial is great, but understanding how
              developers think is invaluable.
            </p>
          </header>
        </div>
        <div className="col-12 col-lg-6">
          <button className="btn btn-block btn-primary btn-promo mb-4 mt-5 mt-lg-7 mt-xl-10 shadow">
            <span className="font-weight-bold">Try it free 7 days</span>
            then <br className="d-md-none" />
            $20/mo. thereafter
          </button>
          <Form />
        </div>
      </div>
    </div>
  );
}
