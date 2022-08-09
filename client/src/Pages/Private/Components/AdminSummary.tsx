import { FC } from "react";

interface Props {
  count: number;
}

const AdminSummary: FC<Props> = ({ count }) => {
  return (
    <div className="row pb-5">
      <div
        className="col-md-3 col-sm-12 px-5 py-4"
        style={{ height: "20vh", backgroundColor: "white" }}
      >
        <div className="row">
          <div
            className="col-12 p-4"
            style={{ backgroundColor: "#353535", height: "15vh" }}
          >
            <div className="row">
              <div className="col-12 text-center">
                <span
                  style={{
                    color: "white",
                    fontSize: "5vh",
                    fontWeight: "bold",
                  }}
                >
                  {count < 10 ? `0${count || 0}` : count}
                </span>
              </div>
              <div className="col-12 text-center">
                <span
                  style={{
                    color: "white",
                    fontSize: "1.5vh",
                    fontWeight: "bold",
                  }}
                >
                  Questions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
