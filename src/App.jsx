import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    500: "",
    100: "",
    50: "",
    10: "",
    5: "",
    2: "",
    1: "",
    CDsub: "",
    due: "",
    CDadd: "",
    paytm: "",
    previnDrawer: "",
  });

  const noteCount = [
    formData[500] * 500,
    formData[100] * 100,
    formData[50] * 50,
    formData[10] * 10,
    formData[5] * 5,
    formData[2] * 2,
    formData[1] * 1,
  ];

  const totalNotes = noteCount.reduce((acc, value) => acc + value, 0);

  const CDamount =
    noteCount[2] +
    noteCount[3] +
    noteCount[4] +
    noteCount[5] +
    noteCount[6] +
    400;

  const Drawer =
    noteCount[0] + noteCount[1] + Number(formData.previnDrawer) - 400;

  const finalAmount =
    totalNotes -
    Number(formData["CDsub"]) +
    Number(formData["due"]) +
    Number(formData["paytm"]) +
    Number(formData["CDadd"]);

  console.log(finalAmount);

  console.log(formData);

  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <h4 style={{ textAlign: "center", margin: "10px" }}>Net Sales Counter</h4>
      <form className="counter-form">
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">500</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="500"
          />
          <div className="noteCount">{noteCount[0]}</div>
        </div>
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">100</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="100"
          />
          <div className="noteCount">{noteCount[1]}</div>
        </div>
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">50</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="50"
          />
          <div className="noteCount">{noteCount[2]}</div>
        </div>
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">10</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="10"
          />
          <div className="noteCount">{noteCount[3]}</div>
        </div>

        <div className="flex aic jcc">
          <div className="currency flex aic jcc">5</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="5"
          />
          <div className="noteCount">{noteCount[4]}</div>
        </div>

        <div className="flex aic jcc">
          <div className="currency flex aic jcc">2</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="2"
          />
          <div className="noteCount">{noteCount[5]}</div>
        </div>

        <div className="flex aic jcc">
          <div className="currency flex aic jcc">1</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="1"
          />
          <div className="noteCount">{noteCount[6]}</div>
        </div>
        <div className="total">Total = {totalNotes}/- </div>

        <div className="flex aic jcc">
          <div className="currency flex aic jcc">C/D (-) </div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="CDsub"
          />
          <div className="noteCount">{totalNotes - formData.CDsub}</div>
        </div>
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">Due </div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="due"
          />
          <div className="noteCount">{noteCount[7]}</div>
        </div>
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">From C/D</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="CDadd"
          />
          <div className="noteCount">{noteCount[7]}</div>
        </div>
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">Paytm </div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="paytm"
          />
          <div className="noteCount">{noteCount[7]}</div>
        </div>
        <div className="flex aic jcc">
          <div className="currency flex aic jcc">Prev</div>
          <input
            className="input-block flex aic jcc"
            type="number"
            onChange={handleChange}
            name="previnDrawer"
          />
          <div className="noteCount">{noteCount[7]}</div>
        </div>
        <div className="fz12">Final Amount = {finalAmount}/-</div>
        <p>keep 400 in C/D </p>
        <p className="fz12">C/D = {CDamount}/-</p>
        <p className="fz12">D = {Drawer}/-</p>
      </form>
    </>
  );
}

export default App;
