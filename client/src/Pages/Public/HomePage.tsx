import Layout from "../../Components/Layout";
import { ExternalLink } from "react-external-link";
const HomePage = () => {
  return (
    <Layout>
      <div
        className="row p-4"
        style={{ minHeight: "85vh", backgroundColor: "#0D0D0D" }}
      >
        <div className="col-12 p-4" style={{ color: "white" }}>
          <div
            className="row"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "8%",
            }}
          >
            <div className="col-12 pb-4 text-center">
              <span
                className="font-body"
                style={{ fontSize: "10vh", color: "white" }}
              >
                Accurate <span style={{ color: "#00AA45" }}>Personality</span>{" "}
                Tests To Ensure <span style={{ color: "#00AA45" }}>You </span>
                Know <span style={{ color: "#00AA45" }}>Yourself</span> Better
                <span style={{ color: "#00AA45" }}>.</span>
              </span>
            </div>

            <div className="col-12  text-center">
              <ExternalLink href="/assesment" target="_self">
                <span
                  style={{ borderRadius: "0px", backgroundColor: "#00AA45" }}
                  className="p-4 btn btn-light"
                >
                  <b style={{ color: "white" }}>Get Started</b>
                </span>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;
