import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const dropdownOptions = [
    { value: "alphabets", label: "Alphabets" },
    { value: "numbers", label: "Numbers" },
    { value: "highestLowercaseAlphabet", label: "Highest Lowercase Alphabet" },
  ];

  const handleSubmit = async () => {
    try {
      setError("");
      const parsedInput = JSON.parse(input);
      const res = await axios.post("https://bajaj-api-w8q3.onrender.com/bfhl", parsedInput);
      setResponse(res.data);
    } catch (err) {
      setError("Invalid JSON input or server error.");
    }
  };

  const renderResponse = () => {
    if (!response || selectedOptions.length === 0) return null;

    const filteredResponse = selectedOptions.map((option) => ({
      label: option.label,
      data: response[option.value],
    }));

    return filteredResponse.map((item, index) => (
      <div key={index}>
        <h3>{item.label}</h3>
        <pre>{JSON.stringify(item.data, null, 2)}</pre>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Bajaj API</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON (e.g., {"data":["A","B","1"]})'
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}

      {response && (
        <div>
          <Select
            options={dropdownOptions}
            isMulti
            onChange={(selected) => setSelectedOptions(selected || [])}
          />
          {renderResponse()}
        </div>
      )}
    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import JsonInput from "./components/JsonInput";
// import ResponseDropdown from "./components/ResponseDropdown";
// import ResponseDisplay from "./components/ResponseDisplay";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// function App() {
//   const [response, setResponse] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleResponse = (data) => {
//     setResponse(data);
//   };

//   const handleDropdownChange = (selected) => {
//     setSelectedOptions(selected.map(option => option.value));
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ textAlign: "center" }}>ABCD123</h1>
//       <JsonInput onSuccess={handleResponse} />
//       {response && (
//         <>
//           <ResponseDropdown onChange={handleDropdownChange} />
//           <ResponseDisplay response={response} selectedOptions={selectedOptions} />
//         </>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;




// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
