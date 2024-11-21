import React from "react";

const ResponseDisplay = ({ response, selectedOptions }) => {
  const renderData = () => {
    return selectedOptions.map((option) => (
      <div key={option}>
        <h3>{option}</h3>
        <pre>{JSON.stringify(response[option], null, 2)}</pre>
      </div>
    ));
  };

  return (
    <div>
      {selectedOptions.length > 0 ? (
        renderData()
      ) : (
        <p>Please select fields from the dropdown to display.</p>
      )}
    </div>
  );
};

export default ResponseDisplay;
