import { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import { getQuestions } from "./APIs/APIs";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import { Breadcrumb, Input, Radio, Space } from "antd";
import { isConditionalExpression } from "typescript";
const Assesment = () => {
  const [values, setValues] = useState<any>({});
  const [reference, setReferences] = useState<any>({});
  const [page, setPage] = useState(0);
  const [result, setResult] = useState<any>(false);

  const onChange = (e: RadioChangeEvent) => {
    let classification = reference[e.target.value] || "";
    setValues({
      ...values,
      [`${e.target.name}`]: [e.target.value, classification],
    });
  };
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);

  const retrieveQuestions = () => {
    getQuestions().then((data: any) => {
      if (data.error) {
        setError(data.error);
      } else {
        let dataCount = data.length;
        let questions: any = {};

        for (let i = 0; i < dataCount; i++) {
          questions[`${i}`] = ["", ""];
        }

        setValues(questions);

        setQuestions(data);
      }
    });
  };

  const assesmentForm = (i: number, data: any) => {
    return (
      i === page && (
        <div className="row" key={i}>
          <div className="col-12 py-2">
            <span>
              {" "}
              Question {i + 1}/{questions.length}
            </span>
          </div>
          <div className="col-12 py-2">
            <span
              style={{
                fontSize: "2.2vh",
                fontWeight: "bold",
              }}
            >
              {data.description}
            </span>
          </div>
          <div className="col-12 py-2">
            <Radio.Group
              buttonStyle="solid"
              onChange={onChange}
              optionType="button"
              name={`${i}`}
              value={values[`${i}`][0]}
              className="w-100"
            >
              <Space direction="vertical">
                <Radio value={`${data.option_a}`} style={{ width: "100%" }}>
                  {data.option_a}
                </Radio>
                <Radio value={`${data.option_b}`} style={{ width: "100%" }}>
                  {data.option_b}
                </Radio>
                <Radio value={`${data.option_c}`} style={{ width: "100%" }}>
                  {data.option_c}
                </Radio>
                <Radio value={`${data.option_d}`} style={{ width: "100%" }}>
                  {data.option_d}
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          {pageNavigation(i)}
        </div>
      )
    );
  };

  const pageNavigation = (i: number) => {
    return (
      <>
        {i === 0 && (
          <div className="col-12">
            {values[`${i}`][0] === "" ? (
              <input
                value="Next Question"
                className="btn btn-secondary w-100"
                type="button"
                disabled
              />
            ) : (
              <span
                onClick={() => {
                  setPage(i + 1);
                }}
                className="btn btn-success w-100"
              >
                Next Question
              </span>
            )}
          </div>
        )}

        {/* Inbetween */}

        {i > 0 &&
          (i !== questions.length - 1 ? (
            <>
              <div className="col-6">
                <span
                  onClick={() => {
                    setPage(i - 1);
                  }}
                  className="btn btn-info w-100"
                >
                  Previous Question
                </span>
              </div>

              <div className="col-6">
                <span
                  onClick={() => {
                    setPage(i + 1);
                  }}
                  className="btn btn-success w-100"
                >
                  Next Question
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="col-6">
                <span
                  onClick={() => {
                    setPage(i - 1);
                  }}
                  className="btn btn-info w-100"
                >
                  Previous Question
                </span>
              </div>

              {}

              <div className="col-6">
                {values[`${i}`][0] === "" ? (
                  <input
                    value="Submit Assesment"
                    className="btn btn-secondary w-100"
                    type="button"
                    disabled
                  />
                ) : (
                  <span
                    onClick={() => {
                      submitAssesment();
                    }}
                    className="btn btn-success w-100"
                  >
                    Submit Assesment
                  </span>
                )}
              </div>
            </>
          ))}
      </>
    );
  };
  const getReferences = () => {
    let tmp: any = {};
    questions &&
      questions.map((data: any, i: number) => {
        tmp[data.option_a] = data.selection_a;
        tmp[data.option_b] = data.selection_b;
        tmp[data.option_c] = data.selection_c;
        tmp[data.option_d] = data.selection_d;
      });

    setReferences(tmp);
  };

  const submitAssesment = () => {
    let introvert = 0;
    let extrovert = 0;
    for (let key in values) {
      let classification = values[key][1];
      classification === "Introvert" ? (introvert += 1) : (extrovert += 1);
    }
    introvert > extrovert ? setResult("Introvert") : setResult("Extrovert");
  };

  useEffect(() => {
    retrieveQuestions();
  }, []);

  useEffect(() => {
    questions.length > 0 && getReferences();
  }, [questions]);

  return (
    <Layout>
      <div
        className="row p-4"
        style={{ background: "#eeee", minHeight: "95vh" }}
      >
        <div className="col-12 p-4">
          <div className="row">
            <div className="col-12 pb-4">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <i className="icofont-home"></i>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span>Assesment {result}</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="col-12 px-4 ">
              <div className="row p-4">
                <div
                  className="col-12 p-4 shadow-lg"
                  style={{ minHeight: "25vh", backgroundColor: "white" }}
                >
                  <div className="row">
                    <div className="col-12">
                      {questions &&
                        questions.map((data: any, i: number) => {
                          return assesmentForm(i, data);
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Assesment;
