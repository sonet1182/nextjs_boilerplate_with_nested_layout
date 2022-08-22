import React from "react";
import Navbar from "../components/Navbar";
import NavLayout from "./NavLayout";

export default function MasterLayout({ children }) {
  return (
    <>
      <NavLayout>
        <div className="row">
          <div className="col-md-2 bg-danger vh-100">Left</div>
          <div className="col-md-8">{children}</div>
          <div className="col-md-2 bg-success">Right</div>
        </div>
      </NavLayout>
    </>
  );
}
