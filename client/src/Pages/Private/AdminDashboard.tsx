import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import AdminSummary from "./Components/AdminSummary";
import ManageQuestions from "./Components/ManageQuestions";
import { getQuestions } from "./APIs/APIs";
import CreateModal from "./Components/AddQuestion/CreateModal";
const AdminDashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);

  const retrieveQuestions = () => {
    getQuestions().then((data: any) => {
      if (data.error) {
        setError(data.error);
      } else {
        setQuestions(data);
      }
    });
  };

  useEffect(() => {
    retrieveQuestions();
  }, []);
  return (
    <Layout>
      <div
        className="row p-4"
        style={{ backgroundColor: "#eeee", minHeight: "95vh" }}
      >
        <div className="col-12 p-4">
          <div className="row p-4">
            <div className="col-12 px-5">
              <AdminSummary count={questions.length} />
              <CreateModal />
              <ManageQuestions questions={questions} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
