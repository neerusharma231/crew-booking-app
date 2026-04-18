import React, { useState } from "react";

const FilterPanel = ({ onFilter, onReset }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const ApplyFilter = () => {
    onFilter({ min:Number(min), max:Number(max), role, location });
  };

  const handleReset = () => {
    setMin("");
    setMax("");
    setRole("");
    setLocation("");
    onReset();
  };

  return (
    <div className="flex flex-wrap gap-3 p-4">
      <input
        type="number"
        placeholder="Min Rating"
       className="p-2 text-white bg-gray-700 border border-gray-600 rounded-md"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Rating"
       className="p-2 text-white bg-gray-700 border border-gray-600 rounded-md"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <select
      className="p-2 text-white bg-gray-700 border border-gray-600 rounded-md"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">All Roles</option>
        <option value="Director">Director</option>
        <option value="Assistant Director">Assistant Director</option>
      </select>
      <input
        type="text"
        placeholder="Location"
       className="p-2 text-white bg-gray-700 border border-gray-600 rounded-md"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
     <div className="ml-auto flex gap-3 mr-auto">
        <button
          onClick={ApplyFilter}
          className="bg-blue-500 px-4 py-2 text-white rounded-md"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 px-4 py-2 text-white rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
