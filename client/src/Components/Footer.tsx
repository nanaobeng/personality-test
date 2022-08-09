import { ExternalLink } from "react-external-link";
const Footer = () => {
  return (
    <div
      className="row py-0"
      style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: "#ffff" }}
    >
      <div
        className="col-12 p-4"
        style={{
          minHeight: "6.7vh",
          backgroundColor: "#404040",
        }}
      >
        <div className="row px-4">
          <div
            className="col-md-1  d-none d-lg-block d-xl-block text-right"
            style={{ color: "white", fontSize: "2vh" }}
          >
            <div className="row justify-content-end">
              {/* <div className="col-4 ">
                <div className="row">
                  <div className="col-12" style={{ cursor: "pointer" }}>
                    <i className="icofont-twitter"></i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div
            className="col-12 d-lg-none d-xl-none px-4"
            style={{ color: "white", fontSize: "2vh" }}
          >
            <div className="row justify-content-center">
              <div className="col-6 text-center">
                <div className="row">
                  {/* <div className="col-4 ">
                    <div className="row">
                      <div className="col-12" style={{ cursor: "pointer" }}>
                        <i className="icofont-twitter"></i>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12  py-3"
        style={{
          height: "4vh",
          backgroundColor: "#303030",
          color: "white",
          fontSize: "1.3vh",
        }}
      >
        <div className="row px-4 text-center">
          <div className="col-12 ">© 2022 Nana Obeng.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
