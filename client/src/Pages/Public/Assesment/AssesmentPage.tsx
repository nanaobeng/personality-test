import { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import { getQuestions } from "./APIs/APIs";

const Assesment = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);

  const retrieveQuestions = () => {
    getQuestions().then((data: any) => {
      if (data.error) {
        setError(data.error);
      } else {
        setQuestions(questions);
      }
    });
  };

  useEffect(() => {
    retrieveQuestions();
  }, []);

  return (
    <Layout>
      <div className="row" style={{ background: "#eeee", minHeight: "95vh" }}>
        fdf
      </div>
    </Layout>
  );
};
export default Assesment;
