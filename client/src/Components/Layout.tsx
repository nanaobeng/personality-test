import { FC } from "react";
import Footer from "./Footer";

import Navbar from "./Navbar";

interface Props {
  children: any;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="row">
      <div className="col-12">
        <Navbar />
      </div>
      <div
        className="col-12 d-block d-sm-none "
        style={{ paddingTop: "7.5vh" }}
      ></div>
      <div className="col-12" style={{ minHeight: "83.1vh" }}>
        {children}
      </div>
      <div className="col-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
