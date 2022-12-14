import { FC, useState } from "react";
import { updateQuestion } from "./APIs/APIs";
import { isAuthenticated } from "../../../Auth/APIs/APIs";
interface Props {
  question: any;
}
const UpdateForm: FC<Props> = ({ question }) => {
  const { token, user } = isAuthenticated();
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    description: question.description,
    option_a: question.option_a,
    option_b: question.option_b,
    option_c: question.option_c,
    option_d: question.option_d,
    selection_a: question.selection_a,
    selection_b: question.selection_b,
    selection_c: question.selection_c,
    selection_d: question.selection_d,
    id: question.id,
    formData: new FormData(),
  });

  const {
    description,
    option_a,
    option_b,
    option_c,
    option_d,
    selection_a,
    selection_b,
    selection_c,
    selection_d,
    id,
    formData,
  } = values;

  const submitRequest = () => {
    formData.set("description", description);
    formData.set("option_a", option_a);
    formData.set("option_b", option_b);
    formData.set("option_c", option_c);
    formData.set("option_d", option_d);
    formData.set("selection_a", selection_a);
    formData.set("selection_b", selection_b);
    formData.set("selection_c", selection_c);
    formData.set("selection_d", selection_d);

    updateQuestion(token, id, formData).then((data: any) => {
      if (data.error) {
        setError(data.error);
      } else {
        setTimeout(function () {
          window.location.href = "/admin/dashboard";
        }, 2000);
      }
    });
  };

  const questionForm = () => {
    return (
      <form>
        <div className="row">
          <div className="col-12 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Question</label>
            <textarea
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
              rows={5}
              className="form-control"
              value={description}
              name="description"
            />
          </div>

          <div className="col-9 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Option A</label>
            <input
              type="text"
              className="form-control"
              value={option_a}
              onChange={(e) => {
                setValues({ ...values, option_a: e.target.value });
              }}
            />
          </div>
          <div className="col-3 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Classification</label>
            <select
              className="form-control"
              value={selection_a}
              onChange={(e) => {
                setValues({ ...values, selection_a: e.target.value });
              }}
            >
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
            </select>
          </div>

          <div className="col-9 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Option B</label>
            <input
              type="text"
              className="form-control"
              value={option_b}
              onChange={(e) => {
                setValues({ ...values, option_b: e.target.value });
              }}
            />
          </div>
          <div className="col-3 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Classification</label>
            <select
              className="form-control"
              value={selection_b}
              onChange={(e) => {
                setValues({ ...values, selection_b: e.target.value });
              }}
            >
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
            </select>
          </div>

          <div className="col-9 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Option C</label>
            <input
              type="text"
              className="form-control"
              value={option_c}
              onChange={(e) => {
                setValues({ ...values, option_c: e.target.value });
              }}
            />
          </div>
          <div className="col-3 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Classification</label>
            <select
              className="form-control"
              value={selection_c}
              onChange={(e) => {
                setValues({ ...values, selection_c: e.target.value });
              }}
            >
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
            </select>
          </div>

          <div className="col-9 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Option D</label>
            <input
              type="text"
              className="form-control"
              value={option_d}
              onChange={(e) => {
                setValues({ ...values, option_d: e.target.value });
              }}
            />
          </div>
          <div className="col-3 px-4 py-2">
            <label style={{ fontWeight: "bold" }}>Classification</label>
            <select
              className="form-control"
              value={selection_d}
              onChange={(e) => {
                setValues({ ...values, selection_d: e.target.value });
              }}
            >
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
            </select>
          </div>

          <div className="col-12 py-4">
            <span
              onClick={() => {
                submitRequest();
              }}
              className="btn btn-success w-100"
            >
              Update
            </span>
          </div>
        </div>
      </form>
    );
  };
  return <div>{questionForm()}</div>;
};
export default UpdateForm;
