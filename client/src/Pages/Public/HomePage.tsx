import Layout from "../../Components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="row p-4">
        <div className="col-12 p-4">
          <div className="row p-4">
            <div className="col-6">
              <div className="row" style={{ paddingTop: "10vh" }}>
                <div className="col-12">
                  <span style={{ fontSize: "7vh" }}>Know Yourself,</span>
                </div>
                <div className="col-12">
                  <span style={{ fontSize: "7vh" }}> Get Tested.</span>
                </div>
                <div className="col-md-9 py-4">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="col-12 ">
                  <span className="btn btn-success">Get Started</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;
