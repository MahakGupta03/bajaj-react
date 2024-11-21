import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const JsonInput = ({ onSuccess }) => {
  const [jsonInput, setJsonInput] = useState("");

  const validateAndSubmit = () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
    //   console.log(parsedInput);
      if (!parsedInput.data) {
        toast.error("Invalid JSON: Missing 'data' field");
        return;
      }
      axios
        .post("localhost:8080/bfhl", parsedInput)
        .then((response) => {
          onSuccess(response.data);
          toast.success("Response received successfully!");
        })
        .catch(() => {
          toast.error("Failed to process request.");
        });
    } catch (e) {
      toast.error("Invalid JSON format!");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <textarea
        rows="6"
        placeholder='Enter JSON (e.g., { "data": ["A", "B", "1"] })'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={validateAndSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default JsonInput;
