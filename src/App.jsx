// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Updated imports for v6
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import axios from "axios"; // Import Axios
// import "./App.css";
// import FormDataCards from "./FormDataCards"; // Import the FormDataCards component

// function App() {
//   const [formData, setFormData] = useState({
//     500: "",
//     100: "",
//     50: "",
//     10: "",
//     5: "",
//     2: "",
//     1: "",
//     CDsub: "",
//     due: "",
//     CDadd: "",
//     paytm: "",
//     previnDrawer: "",
//   });

//   const noteCount = [
//     formData[500] * 500,
//     formData[100] * 100,
//     formData[50] * 50,
//     formData[10] * 10,
//     formData[5] * 5,
//     formData[2] * 2,
//     formData[1] * 1,
//   ];

//   const totalNotes = noteCount.reduce((acc, value) => acc + value, 0);

//   const CDamount =
//     noteCount[2] +
//     noteCount[3] +
//     noteCount[4] +
//     noteCount[5] +
//     noteCount[6] +
//     400;

//   const Drawer =
//     noteCount[0] + noteCount[1] + Number(formData.previnDrawer) - 400;

//   const finalAmount =
//     totalNotes -
//     Number(formData["CDsub"]) +
//     Number(formData["due"]) +
//     Number(formData["paytm"]) +
//     Number(formData["CDadd"]);

//   console.log(finalAmount);

//   console.log(formData);

//   function handleChange(event) {
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const currentDate = new Date().toISOString(); // Get current date and time in ISO format

//     // Create the form data with the date field
//     const dataToSubmit = {
//       ...formData,
//       date: currentDate, // Adding the current date/time
//     };

//     try {
//       // Send POST request to backend
//       const response = await axios.post(
//         "http://localhost:5000/api/saveFormData",
//         dataToSubmit
//       );
//       console.log(response.data); // Log success message
//       alert("Data saved successfully");
//     } catch (error) {
//       console.error("Error saving data", error);
//       alert("Failed to save data");
//     }
//   };

//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <Link to="/">Form</Link> |<Link to="/form-data"> View Form Data</Link>
//         </nav>

//         <Routes>
//           {" "}
//           {/* Replace Switch with Routes */}
//           <Route
//             path="/"
//             element={
//               <div>
//                 <h4 style={{ textAlign: "center", margin: "10px" }}>
//                   Net Sales Counter
//                 </h4>
//                 <form className="counter-form" onSubmit={handleSubmit}>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">500</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="500"
//                     />
//                     <div className="noteCount">{noteCount[0]}</div>
//                   </div>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">100</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="100"
//                     />
//                     <div className="noteCount">{noteCount[1]}</div>
//                   </div>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">50</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="50"
//                     />
//                     <div className="noteCount">{noteCount[2]}</div>
//                   </div>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">10</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="10"
//                     />
//                     <div className="noteCount">{noteCount[3]}</div>
//                   </div>

//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">5</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="5"
//                     />
//                     <div className="noteCount">{noteCount[4]}</div>
//                   </div>

//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">2</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="2"
//                     />
//                     <div className="noteCount">{noteCount[5]}</div>
//                   </div>

//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">1</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="1"
//                     />
//                     <div className="noteCount">{noteCount[6]}</div>
//                   </div>
//                   <div className="total">Total = {totalNotes}/- </div>

//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">C/D (-) </div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="CDsub"
//                     />
//                     <div className="noteCount">
//                       {totalNotes - formData.CDsub}
//                     </div>
//                   </div>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">Due </div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="due"
//                     />
//                     <div className="noteCount">{noteCount[7]}</div>
//                   </div>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">From C/D</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="CDadd"
//                     />
//                     <div className="noteCount">{noteCount[7]}</div>
//                   </div>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">Paytm </div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="paytm"
//                     />
//                     <div className="noteCount">{noteCount[7]}</div>
//                   </div>
//                   <div className="flex aic jcc">
//                     <div className="currency flex aic jcc">Prev</div>
//                     <input
//                       className="input-block flex aic jcc"
//                       type="number"
//                       onChange={handleChange}
//                       name="previnDrawer"
//                     />
//                     <div className="noteCount">{noteCount[7]}</div>
//                   </div>
//                   <div className="fz12">Final Amount = {finalAmount}/-</div>
//                   <p>keep 400 in C/D </p>
//                   <p className="fz12">C/D = {CDamount}/-</p>
//                   <p className="fz12">D = {Drawer}/-</p>
//                   {/* Add Submit Button */}
//                   <button type="submit">Save</button>
//                 </form>
//               </div>
//             }
//           />
//           <Route path="/form-data" element={<FormDataCards />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Import Axios
import "./App.css";
import FormDataCards from "./FormDataCards"; // Import the FormDataCards component

function App() {
  const [formData, setFormData] = useState({
    500: 0,
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    CDsub: 0,
    due: 0,
    CDadd: 0,
    paytm: 0,
    previnDrawer: 0,
  });

  const [calculatedData, setCalculatedData] = useState({
    totalNotes: 0,
    CDamount: 0,
    Drawer: 0,
    finalAmount: 0,
  });

  const noteCountfrnt = [
    formData[500] * 500,
    formData[100] * 100,
    formData[50] * 50,
    formData[10] * 10,
    formData[5] * 5,
    formData[2] * 2,
    formData[1] * 1,
  ];

  const totalNotesfrnt = noteCountfrnt.reduce((acc, value) => acc + value, 0);

  const CDamountfrnt =
    noteCountfrnt[2] +
    noteCountfrnt[3] +
    noteCountfrnt[4] +
    noteCountfrnt[5] +
    noteCountfrnt[6] +
    400;

  const DrawerAmtfrnt =
    noteCountfrnt[0] + noteCountfrnt[1] + Number(formData.previnDrawer) - 400;

  const finalAmountfrontend =
    totalNotesfrnt -
    Number(formData["CDsub"]) +
    Number(formData["due"]) +
    Number(formData["paytm"]) +
    Number(formData["CDadd"]);

  function handleChange(event) {
    const { name, value } = event.target;
    // Ensure input values are stored as numbers
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value) || 0, // Convert to number or fallback to 0
    }));
  }

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString(); // Get current date and time in ISO format

    // Create the form data with the date field
    const dataToSubmit = {
      ...formData,
      date: currentDate, // Adding the current date/time
      CDamount: CDamountfrnt, // Add CDamountfrnt to the data
      DrawerAmount: DrawerAmtfrnt, // Add DrawerAmtfrnt to the data
    };
    try {
      // Send POST request to backend
      const response = await axios.post(
        // "http://localhost:5000/api/saveFormData",
        "https://net-sales-bkd.vercel.app/api/saveFormData",
        dataToSubmit
      );
      console.log(response.data); // Log success message

      // Set the calculated data from the backend response
      if (response.data.data) {
        setCalculatedData(response.data.data); // Update calculated data from response
      }

      alert("Data saved successfully");
    } catch (error) {
      console.error("Error saving data", error);
      alert("Failed to save data");
    }
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Form</Link> |{" "}
          <Link to="/form-data"> View Form Data</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h4 style={{ textAlign: "center", margin: "10px" }}>
                  Net Sales Counter
                </h4>
                <form className="counter-form" onSubmit={handleSubmit}>
                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">500</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="500"
                      value={formData[500]} // Bind the value to state
                    />
                    <div className="noteCount">{noteCountfrnt[0]}</div>
                  </div>
                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">100</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="100"
                      value={formData[100]} // Bind the value to state
                    />
                    <div className="noteCount">{noteCountfrnt[1]}</div>
                  </div>
                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">50</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="50"
                      value={formData[50]} // Bind the value to state
                    />
                    <div className="noteCount">{noteCountfrnt[2]}</div>
                  </div>
                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">10</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="10"
                      value={formData[10]} // Bind the value to state
                    />
                    <div className="noteCount">{noteCountfrnt[3]}</div>
                  </div>
                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">5</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="5"
                      value={formData[5]} // Bind the value to state
                    />
                    <div className="noteCount">{noteCountfrnt[4]}</div>
                  </div>
                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">2</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="2"
                      value={formData[2]} // Bind the value to state
                    />
                    <div className="noteCount">{noteCountfrnt[5]}</div>
                  </div>
                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">1</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="1"
                      value={formData[1]} // Bind the value to state
                    />
                    <div className="noteCount">{noteCountfrnt[6]}</div>
                  </div>

                  <div className="total">Total = {totalNotesfrnt}/- </div>

                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">C/D (-) </div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="CDsub"
                      value={formData.CDsub}
                    />
                    <div className="noteCount">
                      {totalNotesfrnt - formData.CDsub}
                    </div>
                  </div>

                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">Due </div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="due"
                      value={formData.due}
                    />
                    <div className="noteCount">{noteCountfrnt[7]}</div>
                  </div>

                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">From C/D</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="CDadd"
                      value={formData.CDadd}
                    />
                    <div className="noteCount">{noteCountfrnt[7]}</div>
                  </div>

                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">Paytm </div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="paytm"
                      value={formData.paytm}
                    />
                    <div className="noteCount">{noteCountfrnt[7]}</div>
                  </div>

                  <div className="flex aic jcc">
                    <div className="currency flex aic jcc">Prev</div>
                    <input
                      className="input-block flex aic jcc"
                      type="number"
                      onChange={handleChange}
                      name="previnDrawer"
                      value={formData.previnDrawer}
                    />
                    <div className="noteCount">{noteCountfrnt[7]}</div>
                  </div>

                  <div className="total">
                    Final Amount = {finalAmountfrontend}/-
                  </div>
                  <p>keep 400 in C/D </p>
                  <p className="fz12">C/D = {CDamountfrnt}/-</p>
                  <p className="fz12">D = {DrawerAmtfrnt}/-</p>
                  <button type="submit">Save</button>
                </form>
              </div>
            }
          />
          <Route path="/form-data" element={<FormDataCards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
