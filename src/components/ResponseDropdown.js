import React from "react";
import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highestLowercaseAlphabet", label: "Highest Lowercase Alphabet" },
];

const ResponseDropdown = ({ onChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Select
        options={options}
        isMulti
        placeholder="Select response fields to display"
        onChange={onChange}
      />
    </div>
  );
};

export default ResponseDropdown;
