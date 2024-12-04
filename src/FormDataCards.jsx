import { useEffect, useState } from "react";
import axios from "axios";
import "./FormDataCards.css"; // Optional: Style the cards

const FormDataCards = () => {
  const [formDataList, setFormDataList] = useState([]);

  // Fetch the form data when the component mounts
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getFormData"
        );

        // Sort the data by date in descending order (latest first)
        const sortedData = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setFormDataList(sortedData);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <div className="form-data-cards">
      <h2>Saved Form Data</h2>
      <div className="cards-container">
        {formDataList.length > 0 ? (
          formDataList.map((data, index) => (
            <div key={index} className="card">
              {/* <h3>Entry {index + 1}</h3> */}
              <p>
                <strong>Date:</strong> {new Date(data.date).toLocaleString()}
              </p>{" "}
              {/* Formatting the date */}
              <p>
                <strong>500:</strong> {data["500"]}
              </p>
              <p>
                <strong>100:</strong> {data["100"]}
              </p>
              <p>
                <strong>50:</strong> {data["50"]}
              </p>
              <p>
                <strong>10:</strong> {data["10"]}
              </p>
              <p>
                <strong>5:</strong> {data["5"]}
              </p>
              <p>
                <strong>2:</strong> {data["2"]}
              </p>
              <p>
                <strong>1:</strong> {data["1"]}
              </p>
              <p>
                <strong>C/D Subtracted:</strong> {data["CDsub"]}
              </p>
              <p>
                <strong>Due:</strong> {data["due"]}
              </p>
              <p>
                <strong>C/D Added:</strong> {data["CDadd"]}
              </p>
              <p>
                <strong>Paytm:</strong> {data["paytm"]}
              </p>
              <p>
                <strong>Previous in Drawer:</strong> {data["previnDrawer"]}
              </p>
              <p>
                <strong>Final Amount:</strong> {data["finalAmount"]}
              </p>
              <p>
                <strong>C/D:</strong> {data["CDamount"]}
              </p>
              <p>
                <strong>Drawer:</strong> {data["DrawerAmount"]}
              </p>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default FormDataCards;
