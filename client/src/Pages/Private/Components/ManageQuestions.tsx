import { FC, useState } from "react";
import { message, Popconfirm } from "antd";

import { deleteQuestion } from "../APIs/APIs";
import UpdateModal from "./UpdateQuestion/UpdateModal";

interface Props {
  questions: any;
}

const ManageQuestions: FC<Props> = ({ questions }) => {
  const [error, setError] = useState(false);

  const confirm = (id: number) => {
    deleteQuestion(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6Im5hbmFvYmVuZ21hcm51QGdtYWlsLmNvbSIsImlhdCI6MTY2MDA1MjI4M30.WFbOVC47hnil4Ep6O6eEyy3SzmmfgyhGp7wNCpTEhFk",
      id
    ).then((data: any) => {
      if (data.error) {
        setError(data.error);
      } else {
        message.success("Question Deleted");
        window.location.href = "/admin/dashboard";
      }
    });
  };
  return (
    <div className="row pt-4">
      <div
        className="col-12 px-0 shadow-lg"
        style={{ backgroundColor: "white" }}
      >
        <table className="table table-striped">
          <thead style={{ backgroundColor: "#353535", color: "white" }}>
            <tr>
              <th>Question</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {questions &&
              questions.map((data: any, i: number) => {
                return (
                  <tr>
                    <td>{data.description}</td>
                    <td>
                      <UpdateModal id={data.id} />
                    </td>
                    <td>
                      <Popconfirm
                        title="Are you sure to delete this Question?"
                        onConfirm={() => {
                          confirm(data.id);
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <i className=" btn btn-sm btn-danger icofont-trash"></i>
                      </Popconfirm>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageQuestions;
